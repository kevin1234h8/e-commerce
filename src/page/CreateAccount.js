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

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };
const CreateAccount = ({ setCreate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAccount, setCreateAccount] = useState([]);

  // const sendData = async (values) => {
  //   const res = await axios.post(
  //     "http://localhost:5000/create/account",
  //     values,
  //     {
  //       withCredentials: true,
  //     }
  //   );

  //   localStorage.setItem("Name", JSON.stringify(values.name));
  //   localStorage.setItem("Email", JSON.stringify(values.email));
  //   localStorage.setItem("Password", JSON.stringify(values.password));
  // };
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //   },
  //   validate,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  useEffect(() => {
    const getCreateAccountData = async () => {
      const res = await axios.get("https://kevin-ecommerce.vercel.app/login", {
        withCredentials: true,
      });
      setCreateAccount(res.data);
    };
    getCreateAccountData();
  }, []);

  const googleLogin = () => {
    window.open("https://kevin-ecommerce.vercel.app/auth/google", "_self");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex  bg-slate-100 items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 bg-white gap-[40px] p-8 place-items-center shadow-md rounded-lg">
        <div>
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
                    className="px-4 py-2 outline-none"
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
                    className="px-4 py-2 outline-none"
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
                    type={showPassword === false ? "text" : "password"}
                    name="password"
                    placeholder="type a password"
                    className="px-4 py-2 outline-none"
                  />
                  {showPassword === false ? (
                    <VisibilityIcon onClick={handleShowPassword} />
                  ) : (
                    <VisibilityOffIcon onClick={handleShowPassword} />
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
