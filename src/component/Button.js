import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150">
        {text}
      </button>
    </div>
  );
};

export default Button;
