import React from "react";
import Number from "./Number";

const CategoryName = ({ number }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>Category name</div>
        <Number number={number} />
      </div>
    </div>
  );
};

export default CategoryName;
