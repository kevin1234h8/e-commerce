import React from "react";
import gif from "../assets/instagram.gif";
import facebook from "../assets/Facebook.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import google from "../assets/google.webp";
import { Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleLogin = () => {
    window.open("https://kevine-commerce.herokuapp.com/auth/google", "_self");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex  bg-slate-100 items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 bg-white gap-[40px] p-8 place-items-center shadow-md rounded-lg">
        <div>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              ...
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
          </div>
        </div>
        <div className="">
          <div className="text-[24px] font-bold px-4 mb-8">
            Join our Community
          </div>
          <div
            onClick={googleLogin}
            className="flex items-center border-2 p-4 rounded-full my-4  "
          >
            <img src={google} className="w-6 mr-4 " alt="" />
            <div>Sign in with Google</div>
          </div>
          <div className="flex items-center border-2  p-4 rounded-full my-4  ">
            <img src={facebook} className="w-6 mr-4 " alt="" />
            <div>Sign in with facebook</div>
          </div>

          <Divider>
            <small>Or</small>
          </Divider>
          <div>
            <div></div>
            <div className="border-2 px-4 py-2  rounded-full mt-2 mb-4">
              <AccountCircleIcon className="text-[#002fa7] " />
              <input
                type="text"
                className=" px-4 py-2  outline-none "
                placeholder="type a name..."
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <div className="flex items-center justify-center">
              <button className="bg-[#6A983C] px-4 py-2 my-4   rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
