import React from "react";
import products from "../json/products";
import { Rating } from "@mui/material";

const ProductItems = () => {
  
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <div>-36%</div>
            <img
              className="w-48 rounded-lg h-48 object-cover"
              src={product.image}
              alt=""
            />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>
              <Rating name="disabled" value={4} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItems;
