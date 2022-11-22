import React from "react";
import footers from "../json/footers";
import productTags from "../json/ProductTags.json";
const Footer = () => {
  return (
    <>
      <div className="p-8 flex  justify-between">
        {footers.map((footer, index) => {
          return (
            <div key={index}>
              <div className="text-[18px] font-bold mb-4">{footer.main}</div>
              <div>
                {footer.sub.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[#6A983C] text-[14px] my-4"
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
      <div className="p-8">
        <div className="text-[18px] font-bold">Product Tags</div>
        <div className="flex">
          {productTags.map((tag, index) => {
            return (
              <div
                className="mr-8 my-6 font-bold bg-[#F5F5F5] p-2 rounded-[12px]"
                key={index}
              >
                {tag.name}
              </div>
            );
          })}
        </div>
        <div className="my-4">Copyright © 2020 petrbilek.com</div>
      </div>
    </>
  );
};

export default Footer;
