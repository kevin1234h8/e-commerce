import React from "react";
import { useRef } from "react";

const Reviews = ({ backgroundColor, star, width }) => {
  return (
    <div className="flex items-center">
      <div className="mr-4">{star} Stars</div>
      <div className="my-2 border rounded-[12px] w-80 bg-slate-100">
        <div
          className={`bg-[#${backgroundColor}]  w-[${width}%] h-5 rounded-[12px]`}
        ></div>
      </div>
      <div className="ml-2">{width}%</div>
    </div>
  );
};

export default Reviews;
