import AddIcon from "@mui/icons-material/Add";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/Cart";
import Brand from "../ui/Brand";
import Description from "../ui/Description";
import Filter from "../ui/Filter";
import Footer from "../ui/Footer";
import Heading from "../ui/Heading";
import Navbar from "../ui/Navbar";
import Tags from "../ui/Tags";
import RelatedProduct from "./subpage/RelatedProduct";

const ProductDetail = ({ user, products }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div>
        <Navbar user={user} />
        <Brand user={user} />
        <Tags />
        <Heading />
        <Filter />
        <div className="flex">
          {products
            .filter((product) => product.id === id)
            .map((product, index) => {
              return (
                <div
                  className="p-8 grid grid-flow-col gap-[10px] md:gap-[20px] lg:gap-[30px]"
                  key={index}
                >
                  <div className="">
                    <div className="w-[569px]  h-[436px]">
                      <img
                        className="w-[569px]  h-[436px] object-center rounded-lg"
                        src={product.thumbnail}
                        alt=""
                      />
                    </div>

                    <div className="w-[569px]  h-[436px]">
                      <img
                        className="w-[569px]  h-[436px] object-center rounded-lg"
                        src={product.images[0]}
                        alt=""
                      />
                    </div>
                    <div className="w-[569px]  h-[436px]">
                      <img
                        className="w-[569px]  h-[436px] object-center rounded-lg"
                        src={product.images[1]}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[32px] font-bold mb-4">
                      {product.brand}
                    </div>
                    <Rating value={4} readOnly />
                    <div className="text-[17px] my-4">
                      {product.description}
                    </div>
                    <div className="flex items-center justify-between my-4">
                      <div>
                        <div>
                          <span className="text-[#A9A9A9]">Category</span> :{" "}
                          {product.category}
                        </div>
                      </div>
                      <div>
                        <div>
                          <span className="text-[#A9A9A9]">Delivery</span> : in
                          2 days
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border px-2 py-1 rounded-[12px]">
                      <div>
                        <div className="text-[26px] text-[#6A983C] font-extrabold text mb-4 my-8">
                          {Math.floor(
                            product?.price -
                              (product?.price * product?.discountPercentage) /
                                100
                          )}{" "}
                          USD
                        </div>
                        <del className="text-[#A9A9A9]">
                          {product.price} USD
                        </del>
                      </div>
                      <div className="flex items-center ">
                        <div className="flex items-center mr-4 px-4 py-2 rounded-[12px] border">
                          <input
                            type="number"
                            min={1}
                            max={50}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className=" w-20 p-4 outline-none appearance-none"
                          />
                          <div className="flex items-center ">
                            <div>Pcs</div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-[#6A983C] hover:bg-[#446127] duration-150 p-4 rounded-[12px] text-white border-2 border-[#46760A] ">
                            <AddIcon />
                            <button
                              onClick={() =>
                                dispatch(
                                  addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    quantity: quantity,
                                    image: product.image,
                                  })
                                )
                              }
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center my-8 ">
                      <div className="flex items-center mr-8  ">
                        <FavoriteBorderIcon className="text-red-500 mr-2" />
                        <div className="font-extrabold">
                          Add to my wish list
                        </div>
                      </div>
                      <div className="flex items-center mr-8  ">
                        <CompareArrowsIcon className="text-red-500 mr-2" />
                        <div className="font-extrabold">Compare</div>
                      </div>
                    </div>
                    <div>
                      <Description id={id} products={products} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <RelatedProduct products={products} />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
