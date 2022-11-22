import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/logout", "_self");
  };
  return (
    <div className="flex items-center justify-between px-8 py-6">
      <div className="flex text-[12px]">
        <div className="text-[#6A983C] mr-4">Chat with Us</div>
        <div className="mr-4">+420 336 775 664</div>
        <div className="mr-4">kevinang445566@gmail.com</div>
      </div>

      <div className="flex items-center text-[12px] text-[#6A983C]">
        <div className="mr-4">Blog</div>
        <div className="mr-4">About Us</div>
        <div className="mr-4">Carees</div>
        {user ? (
          <button
            onClick={logout}
            className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150"
          >
            Logout
          </button>
        ) : (
          <Link to="/Login">
            <button className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
