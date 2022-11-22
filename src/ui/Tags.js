import React from "react";
import tags from "../json/tags.json";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Tags = () => {
  return (
    <>
      <div className="p-8 flex  gap-[40px]">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="flex items-center ">
              <div>{tag.name}</div>
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
