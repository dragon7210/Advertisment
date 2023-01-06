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
    <div className="bg-[#f8f8f8] h-[100vh] pt-40">
      <div className="w-[800px] bg-[white] p-10 mx-auto rounded-[20px] flex">
        <div className="w-[50%]">
          <p className="text-center text-[40px] font-bold">Sing Up</p>
          <Input placeholder="Name" onChange={(e) => onChange(e, "Name")} />
          <Input placeholder="Email" onChange={(e) => onChange(e, "Email")} />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => onChange(e, "Password")}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => onChange(e, "ConfirmPassword")}
          />
          <button
            className="bg-[#6dabe4] p-2 w-full rounded-[10px] mt-8 hover:bg-[blue]"
            onClick={Register}
          >
            <p className="text-[white]">Register</p>
          </button>
        </div>
        <div className="w-[50%] my-auto">
          <img
            src={`https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg`}
            alt="Sign Up"
            className="ml-[50px] mt-10"
          />
          <p
            className="cursor-pointer text-center mt-10"
            onClick={() => navigate("/")}
          >
            I am already member
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
