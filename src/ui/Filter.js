import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import React, { useRef, useState } from "react";
const Filter = () => {
  const checkRef = useRef();
  let [checkValue, setCheckValue] = useState("");
  const [removeTag, setRemoveTag] = useState(false);

  const removeTags = () => {
    setCheckValue("");
  };

  return (
    <>
      <div className="grid grid-flow-col grid-rows-4 items-center px-8">
        <div className="md:mr-4">
          <div className="flex bg-[#F9F9F9] border-2 border-[#D1D1D1] p-4 rounded-[12px]">
            <div className="mr-4">
              <input
                name="filter"
                type="radio"
                className="accent-black scale-150 mr-4"
              />
              <label htmlFor="filter">Filter text</label>
            </div>
            <div className="mr-4">
              <input
                name="filter"
                type="radio"
                className="accent-black scale-150 mr-4"
              />
              <label htmlFor="filter">Filter text</label>
            </div>
          </div>
        </div>
        <div className="md:mr-4">
          <div className="flex bg-[#F9F9F9] border-2 border-[#D1D1D1] p-4 rounded-[12px]">
            <div className="mr-4">
              <input
                name="filter"
                type="radio"
                className="accent-black scale-150 mr-4"
              />
              <label htmlFor="filter">Filter text</label>
            </div>
            <div className="mr-4">
              <label
                htmlFor="filter"
                className="font-extrabold border border-[#EBEBEB]  rounded-full px-1"
              >
                Nbm
              </label>
            </div>
          </div>
        </div>
        <div className="md:mr-4">
          <div className="flex bg-[#F9F9F9] border-2 border-[#D1D1D1] p-4 rounded-[12px]">
            <div className="mr-4">
              <input
                name="filter"
                type="radio"
                className="accent-black scale-150 mr-4"
              />
              <label htmlFor="filter">Filter text</label>
            </div>
            <div className="mr-4">
              <label
                htmlFor="filter"
                className="font-extrabold border border-[#EBEBEB]  rounded-full px-1"
              >
                Nbm
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-[#F9F9F9] border-2 border-[#D1D1D1] p-4 rounded-[12px]">
          <div className="mr-4 flex items-center border-r-2  ">
            <input
              name="filter2"
              type="checkbox"
              value="filter2"
              ref={checkRef}
              onChange={(e) => {
                if (checkRef.current.checked) {
                  setCheckValue(e.target.value);
                } else {
                  setCheckValue("");
                }
              }}
              className="accent-[#6A983C] scale-150 mr-4 outline-none "
            />
            <label htmlFor="filter2" className="mr-4">
              Filter text
            </label>
            <div className="font-extrabold border border-[#EBEBEB]  rounded-full px-1">
              12
            </div>
          </div>
          <div className="flex items-center">
            <div>Select</div>
            <KeyboardArrowDownOutlinedIcon className="text-[#6A983C]" />
          </div>
        </div>
      </div>
      <div className="flex items-center px-8 my-6">
        <small className="mr-1">Applied filters : </small>
        {checkValue !== "" && (
          <small className=" bg-[#F4F8EC] flex items-center">
            <div className="font-bold p-2 rounded-full text-[#6A983C]">
              Selected {checkValue}
            </div>
            <CloseOutlinedIcon fontSize="small" onClick={removeTags} />
          </small>
        )}
      </div>
    </>
  );
};

export default Filter;
