import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Home from "./pages/Home";
import { isLoggedin } from "./redux/auth/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./layouts/Navbar";
import Post from "./pages/Post";
import MyPosts from "./pages/MyPosts";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  const isLoggedIn = useSelector(isLoggedin);
  return (
    <Router>
      <ToastContainer />
      {isLoggedIn ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/register" element={isLoggedIn ? <Home /> : <Register />} />
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
        <Route
          path="/myposts"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MyPosts />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/*"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Redirect/>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home')
  }, [])
  return null;
}

export default App;
