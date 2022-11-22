import React from "react";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import products from "../json/products";
const Heading = ({ list, setList }) => {
  return (
    <div className="p-8 flex items-center justify-between">
      <div className="text-[32px] font-black">Products</div>
      <div className="flex items-center">
        <div className="flex items-center mr-4 focus:text-[#6A983C]">
          <GridOnOutlinedIcon className="mr-2" />
          <div>Grid view</div>
        </div>
        <div className="flex items-center mr-4">
          <ReorderOutlinedIcon className="mr-2" />
          <div>List view</div>
        </div>
        <div className="flex items-center mr-4 ">
          <div className="text-[#6A983C] mr-2 font-extrabold bg-[#F4F8EC] p-2 rounded-full">
            {products.length}
          </div>
          <div>Products</div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
