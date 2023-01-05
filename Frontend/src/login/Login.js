import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-[500px] bg-[grey] p-5 mx-auto mt-40">
      <Input label="Email" placeholder="Email" onChange={onChange} />
      <Input label="Password" placeholder="Password" onChange={onChange} />
      <button className="bg-[blue] p-2 w-full rounded-[10px] mt-5">
        Login
      </button>
      <button className="bg-[green] p-2 w-full rounded-[10px] mt-5">
        Register
      </button>
    </div>
  );
};

export default Login;
