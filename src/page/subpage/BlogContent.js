import React, { useState } from "react";
import blogContents from "../../json/blogContent.json";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import Footer from "../../ui/Footer";

const BlogContent = ({
  subBlogs,
  setSubBlogPerPage,
  setBlogPage,
  comments,
}) => {
  console.log(blogContents);
  return (
    <div className="px-8">
      <div className="flex gap-[30px]">
        <div className="w-1/3">
          {blogContents.map((blogContent, index) => {
            return (
              <div key={index}>
                <div className="font-bold text-[14px] md:text-[18px] my-4">
                  {blogContent.name}
                </div>
                <div className="flex flex-col  text-[12px] md:text-[16px]">
                  <a
                    href={`/${blogContent.subName[0]}`}
                    className="my-2 underline text-[#6A983C]"
                  >
                    {blogContent.subName[0]}
                  </a>
                  <a
                    href={`/${blogContent.subName[1]}`}
                    className="my-2 underline text-[#6A983C]"
                  >
                    {blogContent.subName[1]}
                  </a>
                  <a
                    href={`/${blogContent.subName[2]}`}
                    className="my-2 underline text-[#6A983C]"
                  >
                    {blogContent.subName[2]}
                  </a>
                  <a
                    href={`/${blogContent.subName[3]}`}
                    className="my-2 underline text-[#6A983C]"
                  >
                    {blogContent.subName[3]}
                  </a>
                  <a
                    href={`/${blogContent.subName[4]}`}
                    className="my-2 underline text-[#6A983C]"
                  >
                    {blogContent.subName[4]}
                  </a>
                </div>
              </div>
            );
          })}
          <div className="font-bold text-[14px] md:text-[18px] my-4">
            Join our list
          </div>
          <div className="text-[12px] md:text-[16px]">
            Signup to be the first to hear about exclusive deals, special
            offers, recepies from our masters and others.
          </div>
          <div className="flex w-full items-center justify-between border-2 px-4 py-2 my-4 rounded-lg">
            <input
              type="email"
              placeholder="Your email address"
              className="text-[12px] md:text-[16px] outline-none w-full"
            />
            <div className="font-bold text-[14px] px-4 md:text-[18px]">
              Subscribe
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-10 lg:grid-cols-3">
            {subBlogs?.map((subBlog, index) => {
              return (
                <div key={index} className="h-[316px]">
                  <Link to={`/subBlog/${subBlog._id}`}>
                    <img
                      src={subBlog.image}
                      className="ounded-lg my-6 object-contain"
                      alt=""
                    />
                  </Link>
                  <div className="font-extrabold text-[14px] md:text-[18px]">
                    {subBlog.title}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] md:text-[14px]">
                    <div>{subBlog.author}</div>
                    <div>{format(subBlog.createdAt)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-[10px]  ">
          <label htmlFor="" className="mr-2 text-[12px] md:text-[16px] ">
            Page
          </label>
          <div className="border-2 border-[#6A983C] rounded-lg">
            <select
              name=""
              id=""
              className="appearance-none p-2 outline-none text-[12px] md:p-4  md:text-[16px] "
              defaultValue={0}
              onChange={(e) => setBlogPage(e.target.value)}
            >
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
            </select>
            <KeyboardArrowDownOutlinedIcon className="text-[#6A983C]" />
          </div>
          <label htmlFor="" className="mr-2 text-[12px] md:text-[16px] ">
            Blog per page
          </label>
          <div className="border-2 border-[#6A983C] rounded-lg">
            <select
              name=""
              onChange={(e) => setSubBlogPerPage(e.target.value)}
              id=""
              className="appearance-none p-2 outline-none text-[12px] md:p-4  md:text-[16px] "
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
            </select>
            <KeyboardArrowDownOutlinedIcon className="text-[#6A983C] mr-2 hidden md:inline" />
          </div>
        </div>

        <div>
          {subBlogs.length === 30 ? (
            <button className="bg-[#6A983C] hidden  items-center px-2 py-1 rounded-[12px] text-white border-2 border-[#46760A] md:py-2 md:px-4 md:flex">
              <div className="mr-2  text-[12px] md:text-[16px]">
                Show less blogs
              </div>
              <KeyboardArrowUpIcon />
            </button>
          ) : (
            <button className="bg-[#6A983C] hidden  items-center px-2 py-1 rounded-[12px] text-white border-2 border-[#46760A] md:py-2 md:px-4 md:flex">
              <div className="mr-2  text-[12px] md:text-[16px] ">
                Show more blogs
              </div>
              <KeyboardArrowDownOutlinedIcon />
            </button>
          )}
        </div>
        <div className="flex items-center">
          <div className="bg-[#F4F8EC] mr-2  text-[#6A983C] p-2 rounded-full font-extrabold ">
            {subBlogs.length}
          </div>
          <div>Blog</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogContent;
