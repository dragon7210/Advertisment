import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import UserBoard from "./components/UserBoard";
import Login from "./pages/Auth/login";
// import Navbar from "./components/Navbar";
import Register from "./pages/Auth/register";
import Home from "./pages/Home";
import Protected from "./components/ProtectedRoute";
import { isLoggedin } from "./redux/auth/authSlice";
import Navbar from './components/Navbar/Navbar';

function App() {
  const isLoggedIn = useSelector(isLoggedin)
  // console.log(isLoggedIn)
  useEffect(() => {
  }, [])
  return (
    <Router>
      {isLoggedIn?<Navbar />:null}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usersboard" element={
          <Protected isLoggedIn={isLoggedIn}>
            <UserBoard />
          </Protected>}
        />
        <Route path="/home" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Home />
          </Protected>}
        />
        <Route path="/" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Home />
          </Protected>}
        />
      </Routes>
    </Router>
  );
}

export default App;
