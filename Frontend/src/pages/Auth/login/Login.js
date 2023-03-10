import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { baseUrl } from "../../../constant";
import { axiosPost } from "../../../utils/httpUtil";
import { ToastError } from "../../../helpers/toast.helper";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [googleInfo, setGoogleInfo] = useState({});
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${tokenResponse.access_token}`;
      try {
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo"
        );
        setGoogleInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const Login = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPost(baseUrl, "/auth/login", { loginInfo });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        window.location.href = "/home";
      }
    } catch (error) {
      if (error.response) {
        ToastError(error.response.data.msg)
      } else {
        ToastError("Server Error");
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
      <div className="w-[300px] md:w-[600px] bg-[white] p-4 md:p-10 mx-auto rounded-[20px] flex">
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
          <p className="text-center text-[24px] md:text-[40px] font-bold">Sign In</p>
          <Input placeholder="Email" onChange={(e) => onChange(e, "Email")} />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => onChange(e, "Password")}
          />
          <button
            className="bg-[#6dabe4] p-2 w-full rounded-[10px] mt-4 sm:mt-16 hover:bg-[blue]"
            onClick={Login}
          >
            <p className="text-[white]">Login</p>
          </button>
          <div className="mt-4 sm:mt-14 flex justify-center">
            <p className="md:mr-[40px]">Or login with</p>
            <button
              className="bg-[red] rounded-[5px] px-[6px]"
              onClick={() => {
                googleLogin();
              }}
            >
              <p className="text-[white]">G</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
