import React from "react";
import { Link, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart";
const RelatedProduct = ({ products }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <div className="px-8 py-4">
      <div className="flex items-center justify-between text-[12px] font-semibold md:text-[16px]">
        <div>Related Product</div>
        <Link to={"/"}>
          <div className="flex items-center">
            <div className="mr-2 text-[12px] md:text-[16px]">More Products</div>
            <ArrowForwardIcon fontSize="small" className="text-[#6A983c]" />
          </div>
        </Link>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-[10px] md:grid-rows-2 md:gap-[20px]  lg:grid-rows-1 lg:gap-[30px]">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="border-2 shadow-md rounded-[12px] my-4 p-4 w-auto flex flex-col justify-around"
            >
              <div>
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="mt-4 mb-2">
                  <div className="text-[12px] md:text-[16px] font-semibold">
                    {product.title}
                  </div>
                  <div>{product.description}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>${product.price}</div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        price: product.price,
                        title: product.title,
                        thumbnail: product.thumbnail,
                        discountPercentage: product.discountPercentage,
                      })
                    )
                  }
                  className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
