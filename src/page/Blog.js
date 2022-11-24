import React from "react";
import Brand from "../ui/Brand";
import Heading from "../ui/Heading";
import Navbar from "../ui/Navbar";
import { Link } from "react-router-dom";
import Tags from "../ui/Tags";
import BlogContent from "./subpage/BlogContent";
import { format } from "timeago.js";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Blog = ({ blogs, subBlogs, setSubBlogPerPage, setBlogPage }) => {
  return (
    <div>
      <Navbar />
      <Brand />
      <Tags />
      <Heading />
      <div className="p-8">
        <div className="grid grid-flow-col grid-cols-2 gap-[10px] ">
          {blogs.map((blog, index) => {
            return (
              <div key={index}>
                <Link to={`/blog/${blog._id}`}>
                  <img
                    alt=""
                    src={blog.blogImage}
                    className="w-full h-[400px] object-cover rounded-lg relative opacity-[0.9]"
                  />
                </Link>
                <div className="relative my-2">
                  <div className="font-extrabold text-[14px] md:text-[18px]">
                    {blog.title}
                  </div>
                  <div className="text-[12px] flex items-center my-2 gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      <AccountCircleIcon />
                      <div>{blog.author}</div>
                    </div>
                    <div>{format(blog.createdAt)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <BlogContent
          subBlogs={subBlogs}
          setSubBlogPerPage={setSubBlogPerPage}
          setBlogPage={setBlogPage}
        />
      </div>
    </div>
  );
};

export default Blog;
