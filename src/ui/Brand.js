import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchIcon from "@mui/icons-material/Search";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import brands from "../json/brands.json";
import ratings from "../json/ratings.json";
const Brand = ({
  user,
  setSearch,
  category,
  setCategory,
  searchCategory,
  searchProduct,
  setBrands,
  checkboxFilter,
  BrandFilter,
  value,
  setValue,
  minPrice,
  maxPrice,
  setMaxPrice,
  setMinPrice,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { items } = useSelector((state) => state.cart);
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const logout = async () => {
    await axios.delete("https://kevin-ecommerce.vercel.app/logout", {
      withCredentials: true,
    });
  };

  const openDrawers = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <div className="hidden px-8  justify-between items-center  md:flex">
        <Link to="/">
          <div className="text-[#151515] tracking-wider font-extrabold ">
            KEVIN SHOP
          </div>
        </Link>
        <div>
          <div className="border-2 flex items-center px-4 py-2 rounded-lg relative">
            <div className="flex flex-col border-r-2 ">
              <div>
                <select
                  name=""
                  id=""
                  className="appearance-none outline-none py-2 px-4"
                  // onClick={searchCategory}
                  defaultValue={"all"}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">All Category</option>
                  <option value="smartphones">Smartphones</option>
                  <option value="laptops">Laptops</option>
                  <option value="fragrances">Fragrances</option>
                  <option value="skincare">Skincare</option>
                  <option value="groceries">Groceries</option>
                  <option value="home-decoration">Home Decoration</option>
                </select>
                <ArrowDropDownIcon className="text-[#6A983c] " />
              </div>
            </div>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 outline-none w-64"
              placeholder="Search Products , categories..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchProduct();
                }
              }}
            />
            <SearchIcon className="pr-1" onClick={searchProduct} />
          </div>
        </div>
        <div className="flex items-center">
          {user?.map((val, index) => {
            return (
              <div key={index}>
                {user ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={val?.photo}
                      className="w-14 h-14 rounded-full"
                      alt=""
                    />
                    <div className="mr-4">{val?.displayName}</div>
                  </div>
                ) : (
                  <Person2OutlinedIcon className="mr-4" />
                )}
              </div>
            );
          })}

          <Link to="/cart">
            <div className="relative">
              <LocalMallOutlinedIcon />
              <div className=" flex items-center justify-center absolute bg-[#E5704B] w-4 h-4 rounded-full text-white p-2 bottom-[-5px] left-0">
                {items?.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-8  md:hidden">
        <div className="flex  items-center justify-between  ">
          <div className="flex text-[12px]">
            <div onClick={toggleSidebar} className="text-[#6A983C] mr-4">
              Chat with Us
            </div>
            <Drawer
              open={openSidebar}
              onClose={toggleSidebar}
              direction="right"
              className="bla bla bla"
            >
              <div className="p-8">
                <div className="font-semibold mb-2">Contact</div>
                <div>Email : kevinang445566@gmail.com</div>
                <div>Phone : 123-456-7890</div>
              </div>
            </Drawer>
          </div>

          <div className="flex items-center text-[12px] text-[#6A983C]">
            <Link to="/blog">
              <div className="mr-4">Blog</div>
            </Link>
            <div className="mr-4">About Us</div>
            <div className="mr-4">Carees</div>
            {user ? (
              <button
                onClick={logout}
                className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150"
              >
                Logout
              </button>
            ) : (
              <Link to="/Login">
                <button className="bg-[#6A983C] px-4 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150">
                  Login
                </button>
              </Link>
            )}
            <Link to="/cart">
              <div className="relative text-black ml-4">
                <LocalMallOutlinedIcon />
                <div className=" flex items-center justify-center absolute bg-[#E5704B] w-4 h-4 rounded-full text-white p-2 bottom-[-5px] left-0">
                  {items?.length}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between my-4">
          <Link to="/">
            <div className=" text-[#151515] tracking-wider font-extrabold text-[12px] md:text-[16px]">
              KEVIN SHOP
            </div>
          </Link>
          <div>
            <MenuIcon onClick={openDrawers} />
          </div>
        </div>

        {openDrawer === true && (
          <div className="bg-slate-100 px-4 rounded-lg">
            <div className="border-2 bg-white flex items-center justify-between  py-1 rounded-md ">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="px-2 outline-none text-[10px]  md:text-[16px] w-full"
                placeholder="Search Products , categories..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    searchProduct();
                  }
                }}
              />
              <SearchIcon className="pr-1" onClick={searchProduct} />
            </div>
            <div className="flex flex-col">
              <div className="text-[14px] font-semibold my-4 md:text-[18px]">
                Categories
              </div>
              <div className="grid grid-rows-4 grid-flow-col gap-[15px]">
                <div className=" ">
                  <input
                    type="radio"
                    name="filter"
                    defaultValue={"all"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    All
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    value={"smartphones"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    Smartphones
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    value={"laptops"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    Laptops
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    value={"fragrances"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    Fragrances
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    value={"skincare"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    Skincare
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    value={"groceries"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    Groceries
                  </label>
                </div>
                <div className=" ">
                  <input
                    type="radio"
                    name="filter"
                    value={"home-decoration"}
                    onChange={(e) => setCategory(e.target.value)}
                    className="accent-[#6A983C] mr-4 outline-none mb-2 "
                  />
                  <label htmlFor="" className="text-[12px] md:text-[16px]">
                    Home Decoration
                  </label>
                </div>
              </div>
            </div>
            <div className="text-[14px] font-bold my-2 md:text-[18px]">
              Brands
            </div>
            <div className="grid grid-cols-2">
              {brands.map((brand, index) => {
                return (
                  <div key={index} className="mb-2 ml-1 ">
                    <input
                      name="brand"
                      type="radio"
                      value={brand.title}
                      onChange={(e) => {
                        setBrands(e.target.value);
                      }}
                      className="accent-[#6A983C]  mr-4 outline-none mb-4 "
                    />
                    <label htmlFor="filter2" className="mr-4 text-[12px]">
                      {brand.title}
                    </label>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="text-[14px] font-bold my-4 md:text-[18px]">
                Ratings
              </div>
              {ratings.map((rating, index) => {
                return (
                  <div key={index} className="my-2 ml-1 flex items-center ">
                    <input
                      name="filter2"
                      type="radio"
                      value={rating.number}
                      className="accent-[#6A983C] mr-4 outline-none "
                    />
                    <Rating
                      value={rating.number}
                      fontSize="small"
                      className="text-[12px] "
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <div className="text-[14px] font-bold my-4 ">Price</div>
              <Slider
                value={value}
                setValue={setValue}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
              <div className="flex">
                <div className="mr-4">
                  <div className="text-[14px]">Min</div>
                  <input
                    type="number"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="bg-[#F9F9F9] text-[14px] border-2 border-[#D1D1D1] outline-none p-2 rounded-[12px]"
                  />
                </div>
                <div>
                  <div className="text-[14px]">Max</div>
                  <input
                    type="number"
                    placeholder="0"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="bg-[#F9F9F9] text-[14px] border-2 border-[#D1D1D1] outline-none p-2 rounded-[12px]"
                  />
                </div>
              </div>
              <div className="my-6">
                <button
                  onClick={checkboxFilter}
                  className="bg-[#6A983C] p-2 rounded-[12px] text-[14px] text-white border-2 border-[#46760A] mb-4 "
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Brand;
