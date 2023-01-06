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
        email: e.target.value,
      });
    }
    if (field === "Password") {
      setLoginInfo({
        ...loginInfo,
        password: e.target.value,
      });
    }
  };
  return (
    <div className="bg-[#f8f8f8] h-[100vh] pt-40">
      <div className="w-[800px] bg-[white] p-10 mx-auto rounded-[20px] flex">
        <div className="w-[50%]">
          <img
            src={`https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg`}
            alt="Sign In"
          />
          <p
            className="cursor-pointer text-center mt-5"
            onClick={() => navigate("/register")}
          >
            Create an account
          </p>
        </div>
        <div className="w-[50%]">
          <p className="text-center text-[40px] font-bold">Sing In</p>
          <Input placeholder="Email" onChange={(e) => onChange(e, "Email")} />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => onChange(e, "Password")}
          />
          <button
            className="bg-[#6dabe4] p-2 w-full rounded-[10px] mt-16 hover:bg-[blue]"
            onClick={Login}
          >
            <p className="text-[white]">Login</p>
          </button>
          <div className="mt-14 flex justify-center">
            <p className="mr-[40px]">Or login with</p>
            <button className="bg-[red] rounded-[5px] px-[6px]">
              <p className="text-[white]">G</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
