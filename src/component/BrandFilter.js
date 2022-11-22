import React, { useEffect, useRef, useState } from "react";

const BrandFilter = ({ brand, checkboxFilter, setBrands }) => {
  const brandRef = useRef();

  // const handleToggle = (value) => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  return (
    <div className="my-2 ml-1 hidden md:block">
      <input
        name="brand"
        type="radio"
        ref={brandRef}
        value={brand}
        // onClick={checkboxFilter}
        // onChange={() => handleToggle(brand)}
        // checked={checked.indexOf(brand) === -1 ? false : true}
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
