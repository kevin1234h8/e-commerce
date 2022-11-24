import React, { useEffect, useRef, useState } from "react";

const BrandFilter = ({ brand, setBrands }) => {
  return (
    <div className="my-2 ml-1 ">
      <input
        name="brand"
        type="radio"
        value={brand}
        onChange={(e) => {
          setBrands(e.target.value);
        }}
        className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
      />
      <label htmlFor="filter2" className="mr-4">
        {brand}
      </label>
    </div>
  );
};

export default BrandFilter;
