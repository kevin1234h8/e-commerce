import React from "react";
import AddIcon from "@mui/icons-material/Add";
const ButtonIcon = ({ text }) => {
  return (
    <div className="bg-[#6A983C] hover:bg-[#446127] duration-150 p-4 rounded-[12px] text-white border-2 border-[#46760A] ">
      <AddIcon />
      <button>{text}</button>
    </div>
  );
};

export default ButtonIcon;
