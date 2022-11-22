import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LineAxisOutlined } from "@mui/icons-material";
const Brand = ({
  user,
  setSearch,
  category,
  setCategory,
  searchCategory,
  searchProduct,
}) => {
  const { items } = useSelector((state) => state.cart);
  const [searchData, setSearchData] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <>
      <div className="px-8 flex justify-between items-center">
        <Link to="/">
          <div className=" text-[#151515] tracking-wider font-extrabold ">
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

              <div
                className={`absolute bg-slate-100 peer-focus/draft:block border top-full p-4 left-0 w-full ${
                  openDropdown === false && "scale-0"
                } duration-150 ease-linear`}
              >
                <ul>
                  <li className="hover:bg-[#6A983c]">dakd</li>
                  <li className="hover:bg-[#6A983c]">saddsa</li>
                  <li className="hover:bg-[#6A983c]">asdsad</li>
                  <li className="hover:bg-[#6A983c]">sdad</li>
                </ul>
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
          {user ? (
            <>
              <img
                className="rounded-full w-10 mr-4"
                src={user?.photos[0].value}
                alt=""
              />
              <div className="mr-4 text-2xl font-bold ">
                {user?.displayName.split(" ")[0]}
              </div>
            </>
          ) : (
            <Person2OutlinedIcon className="font-thin mr-4" />
          )}
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
    </>
  );
};

export default Brand;
