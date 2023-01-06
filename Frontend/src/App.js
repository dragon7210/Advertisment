import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Home from "./pages/Home";
import { isLoggedin } from "./redux/auth/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./layouts/Navbar";
import Post from "./pages/Post";
function App() {
  const isLoggedIn = useSelector(isLoggedin);
  return (
    <Router>
      {isLoggedIn ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Post />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
