import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("https://kevin-ecommerce.vercel.app/logout", "_self");
  };
  return (
    <div className="hidden  items-center justify-between px-8 py-6 md:flex">
      <div className="flex text-[12px]">
        <div className="text-[#6A983C] mr-4">Chat with Us</div>
        <div className="mr-4">+420 336 775 664</div>
        <div className="mr-4">kevinang445566@gmail.com</div>
      </div>

      <div className="flex items-center text-[12px] text-[#6A983C]">
        <Link to="/blog">
          <div className="mr-4">Blog</div>
        </Link>

        <div className="mr-4">About Us</div>
        <div className="mr-4">Carees</div>
        {user === "" ? (
          <Link to="/Login">
            <button className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
