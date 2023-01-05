import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        loginInfo,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const onChange = (e, field) => {
    if (field === "Email") {
      setLoginInfo({
        ...loginInfo,
        Email: e.target.value,
      });
    }
    if (field === "Password") {
      setLoginInfo({
        ...loginInfo,
        Password: e.target.value,
      });
    }
  };
  return (
    <div className="w-[500px] bg-[grey] p-5 mx-auto mt-40">
      <Input
        label="Email"
        placeholder="Email"
        onChange={(e) => onChange(e, "Email")}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        onChange={(e) => onChange(e, "Password")}
      />
      <button
        className="bg-[blue] p-2 w-full rounded-[10px] mt-5"
        onClick={Login}
      >
        Login
      </button>
      <button
        className="bg-[green] p-2 w-full rounded-[10px] mt-5"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
