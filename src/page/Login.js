import React from "react";
import facebook from "../assets/Facebook.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import google from "../assets/google.webp";
import github from "../assets/github.png";
import { Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import businessGif from "../assets/business.gif";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";
import axios from "axios";
const Login = ({ login, setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendLogin = async () => {
    const res = await axios.post(
      "https://kevin-ecommerce.vercel.app/login/data",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );

    const getEmail = JSON.parse(localStorage.getItem("Email"));
    const getPassword = JSON.parse(localStorage.getItem("Password"));
    console.log(getEmail, getPassword);
    if (getEmail === email && getPassword === password) {
      setLogin(true);
      localStorage.setItem("login", JSON.stringify(login));
      setError(false);
    } else {
      setError(true);
    }
  };

  const Github = () => {
    window.open("https://kevin-ecommerce.vercel.app/auth/github", "_self");
  };

  const googleLogin = () => {
    window.open("https://kevin-ecommerce.vercel.app/auth/google", "_self");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="flex  bg-slate-100 items-center justify-center min-h-screen">
        <div className="grid grid-cols-2 bg-white gap-[40px] p-8 place-items-center shadow-md rounded-lg">
          <div className="">
            <div className="text-[24px] font-bold px-4 mb-8">
              Join our Community
            </div>
            <div
              onClick={googleLogin}
              className="flex my-6 border-2 rounded-full p-2 items-center justify-center"
            >
              <img src={google} className="w-4 mr-4" alt="" />
              <div>Sign in with Google</div>
            </div>
            <div
              onClick={Github}
              className="flex my-6 border-2 rounded-full p-2 items-center justify-center"
            >
              <img src={github} className="w-4 mr-4" alt="" />
              <div>Sign in with Github</div>
            </div>

            <div>
              <div className="border-2 px-4 py-2  rounded-full mt-2 mb-4">
                <EmailIcon className="text-[#002fa7] " />
                <input
                  type="email"
                  className=" px-4 py-2  outline-none "
                  placeholder="type a email..."
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center border-2 px-4 py-2  rounded-full mt-2 mb-4">
                <PasswordIcon className="text-[#002fa7] " />
                <input
                  type={showPassword === false ? "text" : "password"}
                  className=" px-4 py-2  outline-none "
                  placeholder="type a password..."
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword === false ? (
                  <VisibilityIcon onClick={handleShowPassword} />
                ) : (
                  <VisibilityOffIcon onClick={handleShowPassword} />
                )}
              </div>
              {error === true && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium ">Error ! </span>Wrong email and
                  password combination
                </div>
              )}
              <div className="flex items-center justify-center">
                <button
                  onClick={sendLogin}
                  className="bg-[#6A983C] px-4 py-2 my-4 w-full  rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={businessGif} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
