import { KeyboardArrowUp } from "@mui/icons-material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BrandFilter from "../component/BrandFilter";
import RatingFilter from "../component/RatingFilter";
import { addToCart } from "../features/Cart";
import Slider from "../component/Slider";

const Product = ({
  list,
  setList,
  search,
  products,
  categoryFilter,
  showProductPerPage,
  showPageProduct,
  setPage,
  setProductPerPage,
  checkboxFilter,
  setBrands,
  setMaxPrice,
  setMinPrice,
  priceFilter,
  maxPrice,
  minPrice,
  value,
  setValue,
  category,
  setCategory,
}) => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [data, setData] = useState(products);

  const showMoreData = async () => {
    const res = await axios.get(
      "https://kevine-commerce.herokuapp.com/products"
    );
    setData(res.data);
  };

  const showLessData = async () => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?p=${0}`
    );
    setData(res.data);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  console.log(category);

  return (
    <>
      <div className="p-8 flex gap-[40px]">
        <div className="categories">
          <div className="mb-6">
            <div className="text-[18px] font-bold my-4">Categories</div>
            <div className="flex flex-col">
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  defaultValue={"all"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category All</label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  value={"smartphones"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category Smartphones</label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  value={"laptops"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category Laptops</label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  value={"fragrances"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category Fragrances</label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  value={"skincare"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category Skincare</label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  value={"groceries"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category Groceries</label>
              </div>
              <div className="my-1">
                <input
                  type="radio"
                  name="filter"
                  value={"home-decoration"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="accent-[#6A983C] scale-150 mr-4 outline-none mb-4 "
                />
                <label htmlFor="">Category Home Decoration</label>
              </div>
            </div>
          </div>
          <div className="my-6">
            <div className="text-[18px] font-bold my-4">Brands</div>
            <div className="flex">
              <div>
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"All"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Apple"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Samsung"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Microsoft Surface"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Infinix"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Hp"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Oppo"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Huawei"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Fog Scent Xpressio"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Al Munakh"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Lord - Al-Rehab"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"L'Oreal Paris"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Hemani Tea"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Dermive"}
                />
              </div>
              <div>
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"ROREC White Rice"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Fair & Clear"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Saaf & Khaas"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Bake Parlor Big"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Fauji"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Dry Rose"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Royal_Mirage"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Flying Wooden"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"LED Lights"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"luxury palace"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Golden"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Baking Food Items"}
                />
                <BrandFilter
                  setBrands={setBrands}
                  checkboxFilter={checkboxFilter}
                  brand={"Boho Decor"}
                />
              </div>
            </div>
          </div>
          <div className="my-6">
            <div className="text-[18px] font-bold my-4">Rating</div>
            <RatingFilter number={5} />
            <RatingFilter number={4} />
            <RatingFilter number={3} />
            <RatingFilter number={2} />
            <RatingFilter number={1} />
          </div>
          <div>
            <div className="text-[18px] font-bold my-4">Price</div>
            <Slider
              value={value}
              setValue={setValue}
              priceFilter={priceFilter}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
            <div className="flex">
              <div className="mr-4">
                <div>Min</div>
                <input
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="bg-[#F9F9F9] border-2 border-[#D1D1D1] outline-none p-2 rounded-[12px]"
                />
              </div>
              <div>
                <div>Max</div>
                <input
                  type="number"
                  placeholder="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="bg-[#F9F9F9] border-2 border-[#D1D1D1] outline-none p-2 rounded-[12px]"
                />
              </div>
            </div>
            <div className="my-6">
              <button
                onClick={checkboxFilter}
                className="bg-[#6A983C] p-4 rounded-[12px] text-white border-2 border-[#46760A]"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="product grid grid-cols-3 grid-rows-3 gap-[40px]">
          {products.map((product, index) => {
            return (
              <div
                className="flex flex-col justify-between  border-2 shadow-md rounded-lg p-4 border-[#D1D1D1] max-h-[450px]"
                key={index}
              >
                <div className="text-[#6A983c] my-2 ">
                  -{product?.discountPercentage}%
                </div>
                <Link to={`/product/${product.id}`}>
                  <img
                    className="min-w-full rounded-lg h-48 object-cover"
                    src={product?.thumbnail}
                    alt=""
                  />
                </Link>
                <div className="font-extrabold my-2 text-[15px]">
                  {product?.title}
                </div>
                <div className="text-[12px] mb-2">{product?.description}</div>
                <div>
                  <Rating
                    sx={{
                      color: "black",
                    }}
                    name="disabled"
                    value={4}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold">
                      {Math.floor(
                        product?.price -
                          (product?.price * product?.discountPercentage) / 100
                      )}{" "}
                      USD
                    </div>
                    <del>${product?.price}</del>
                  </div>
                  <div>
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
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center  ">
          {/* <span className="text-[#D1D1D1]]">Page</span> : 1 2{" "}
          <span className="text-[#6A983c]">3</span> 4 */}
          <label htmlFor="" className="mr-2 ">
            Page :
          </label>
          <div className="">
            <select
              name=""
              id=""
              className="appearance-none p-4 outline-none"
              onClick={showPageProduct}
              defaultValue={0}
              onChange={(e) => setPage(e.target.value)}
            >
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
            </select>
            <KeyboardArrowDownOutlinedIcon className="text-[#6A983C]" />
          </div>
          <label htmlFor="" className="mr-2 ">
            Products per page :
          </label>
          <div className="border-2 border-[#6A983C] rounded-lg">
            <select
              name=""
              id=""
              className="appearance-none p-4 outline-none"
              onClick={showProductPerPage}
              onChange={(e) => setProductPerPage(e.target.value)}
            >
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <KeyboardArrowDownOutlinedIcon className="text-[#6A983C] mr-2" />
          </div>
        </div>

        <div>
          {products.length === 30 ? (
            <button
              onClick={showLessData}
              className="bg-[#6A983C] flex items-center px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A]"
            >
              <div className="mr-2">Show less products</div>
              <KeyboardArrowUp />
            </button>
          ) : (
            <button
              onClick={showMoreData}
              className="bg-[#6A983C] flex items-center px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A]"
            >
              <div className="mr-2">Show more products</div>
              <KeyboardArrowDownOutlinedIcon />
            </button>
          )}
        </div>
        <div className="flex items-center">
          <div className="bg-[#F4F8EC] mr-2  text-[#6A983C] p-2 rounded-full font-extrabold ">
            {products.length}
          </div>
          <div>Products</div>
        </div>
      </div>
    </>
  );
};

export default Product;
