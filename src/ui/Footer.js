import React from "react";
import footers from "../json/footers";
import productTags from "../json/ProductTags.json";
const Footer = () => {
  return (
    <>
      <div className="p-8 grid grid-flow-row grid-col-4 gap-[10px]  justify-between md:gap-[20px] md:grid-cols-2">
        {footers.map((footer, index) => {
          return (
            <div key={index}>
              <div className="text-[14px] md:text-[18px] font-bold mb-4">
                {footer.main}
              </div>
              <div>
                {footer.sub.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[#6A983C] text-[12px] my-4 md:text-[14px]"
                    >
                      {val.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-8 ">
        <div className="text-[14px]  font-bold md:text-[18px]">
          Product Tags
        </div>
        <div className="grid grid-flow-col grid-rows-4 md:grid-rows-2 lg:grid-rows-1">
          {productTags.map((tag, index) => {
            return (
              <div
                className="mr-4 my-3 flex items-center justify-center font-bold bg-[#F5F5F5] text-[10px] p-2 rounded-[12px] md:text-[14px] md:mr-4 md:my-6"
                key={index}
              >
                {tag.name}
              </div>
            );
          })}
        </div>
        <div className="my-4 text-[12px] md:text-[16px]">
          Copyright © 2020 petrbilek.com
        </div>
      </div>
    </>
  );
};

export default Footer;
