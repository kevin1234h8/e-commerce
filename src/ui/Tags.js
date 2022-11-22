import React from "react";
import tags from "../json/tags.json";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Tags = () => {
  return (
    <>
      <div className="p-8 grid grid-flow-col grid-rows-3  gap-[10px] md:gap-[20px]  lg:gap-[30px]  lg:grid-row-1 ">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="flex items-center">
              <div className="text-[12px] md:text-[16px]">{tag.name}</div>
              <KeyboardArrowDownOutlinedIcon className="text-[#6A983C]" />
            </div>
          );
        })}
      </div>
      <small className="px-8 text-[#A9A9A9]">
        Homepage /{" "}
        <span className="font-bold text-black">Fruit and vegetables</span>
      </small>
    </>
  );
};

export default Tags;
