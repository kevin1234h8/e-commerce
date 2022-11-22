import React from "react";
import { Rating } from "@mui/material";
const RatingFilter = ({ number }) => {
  return (
    <div className="my-2 ml-1 flex items-center ">
      <input
        name="filter2"
        type="checkbox"
        value={4}
        className="accent-[#6A983C] scale-150 mr-4 outline-none "
      />
      <Rating value={number} />
    </div>
  );
};

export default RatingFilter;
