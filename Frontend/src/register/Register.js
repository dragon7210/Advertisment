import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        registerInfo,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const onChange = (e, field) => {
    if (field === "Email") {
      setRegisterInfo({
        ...registerInfo,
        email: e.target.value,
      });
    }
    if (field === "Password") {
      setRegisterInfo({
        ...registerInfo,
        password: e.target.value,
      });
    }
    if (field === "Name") {
      setRegisterInfo({
        ...registerInfo,
        name: e.target.value,
      });
    }
    if (field === "ConfirmPassword") {
      setRegisterInfo({
        ...registerInfo,
        confPassword: e.target.value,
      });
    }
  };
  return (
    <div className="w-[500px] bg-[grey] p-5 mx-auto mt-40">
      <Input
        label="Name"
        placeholder="Name"
        onChange={(e) => onChange(e, "Name")}
      />
      <Input
        label="Email"
        placeholder="Email"
        type="email"
        onChange={(e) => onChange(e, "Email")}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        onChange={(e) => onChange(e, "Password")}
      />
      <Input
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        onChange={(e) => onChange(e, "ConfirmPassword")}
      />
      <button
        className="bg-[green] p-2 w-full rounded-[10px] mt-5"
        onClick={Register}
      >
        Register
      </button>
      <button
        className="bg-[blue] p-2 w-full rounded-[10px] mt-5"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default Register;
