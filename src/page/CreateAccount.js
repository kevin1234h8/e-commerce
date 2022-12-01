import React, { useEffect } from "react";
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
import github from "../assets/github.png";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short")
    .max(20, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum")
    .max(20, "Password too long")
    .required("Required"),
});

const CreateAccount = ({ setCreate }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAccount, setCreateAccount] = useState([]);

  useEffect(() => {
    const getCreateAccountData = async () => {
      const res = await axios.get("https://kevin-ecommerce.vercel.app/login", {
        withCredentials: true,
      });
      setCreateAccount(res.data);
    };
    getCreateAccountData();
  }, []);

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
    <div className="flex  bg-slate-100 items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 bg-white gap-[40px] p-8 place-items-center shadow-md rounded-lg md:grid-cols-2">
        <div className="hidden md:block">
          <img src={gif} alt="" />
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            axios.post("http://localhost:5000/create/account", values, {
              withCredentials: true,
            });

            const getName = localStorage.setItem(
              "Name",
              JSON.stringify(values.name)
            );
            const getEmail = localStorage.setItem(
              "Email",
              JSON.stringify(values.email)
            );
            const getPassword = localStorage.setItem(
              "Password",
              JSON.stringify(values.password)
            );

            setCreate(true);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="text-[18px] text-center font-bold px-4 mb-8 md:text-[24px] md:text-start">
                Join our Community
              </div>
              <div
                onClick={googleLogin}
                className="flex my-6 border-2 rounded-full p-2 px- items-center justify-center"
              >
                <img src={google} className="w-4 mr-4" alt="" />
                <div className="text-[14px] md:text-[16px]">
                  Sign in with Google
                </div>
              </div>
              <div
                onClick={Github}
                className="flex my-6 border-2 rounded-full p-2 items-center justify-center"
              >
                <img src={github} className="w-4 mr-4" alt="" />
                <div className="text-[14px] md:text-[16px]">
                  Sign in with Github
                </div>
              </div>
              <div>
                <div className="border-2 px-4 py-2  rounded-full mt-2 mb-4">
                  <AccountCircleIcon className="text-[#002fa7] " />
                  {/* <input
                    type="text"
                    className=" px-4 py-2  outline-none "
                    placeholder="type a name..."
                    onChange={(e) => setName(e.target.value)}
                    required
                  /> */}
                  <Field
                    name="name"
                    placeholder="type a name"
                    className="px-4 py-2 outline-none text-[14px] md:text-[16px]"
                  />
                </div>
                {errors.name && touched.name ? (
                  <div className="px-4 text-red-500 font-bold">
                    {errors.name}
                  </div>
                ) : null}
                <div className="border-2 px-4 py-2  rounded-full mt-2 mb-4">
                  <EmailIcon className="text-[#002fa7] " />
                  {/* <input
                    type="email"
                    name="email"
                    id="email"
                    className=" px-4 py-2  outline-none "
                    placeholder="type a email..."
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.email}
                    required
                  /> */}
                  <Field
                    name="email"
                    placeholder="type a email"
                    className="px-4 py-2 outline-none text-[14px] md:text-[16px]"
                  />
                </div>
                {errors.email && touched.email ? (
                  <div className="px-4 text-red-500 font-bold">
                    {errors.email}
                  </div>
                ) : null}

                <div className="flex items-center border-2 px-4 py-2  rounded-full mt-2 mb-4">
                  <PasswordIcon className="text-[#002fa7] " />
                  {/* <input
                    type={showPassword === false ? "text" : "password"}
                    className=" px-4 py-2  outline-none "
                    placeholder="type a password..."
                    onChange={(e) => setPassword(e.target.value)}
                /> */}

                  <Field
                    type={showPassword === true ? "password" : "text"}
                    name="password"
                    placeholder="type a password"
                    className="px-4 py-2 outline-none text-[14px] md:text-[16px]"
                  />
                  {showPassword === true ? (
                    <VisibilityOffIcon onClick={handleShowPassword} />
                  ) : (
                    <VisibilityIcon onClick={handleShowPassword} />
                  )}
                </div>
                {errors.password && touched.password ? (
                  <div className="px-4 text-red-500 font-bold">
                    {errors.password}
                  </div>
                ) : null}

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    // onClick={sendCreateAccountData}
                    className="bg-[#6A983C] px-4 py-2 my-4   rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateAccount;
