import React from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "timeago.js";
import Brand from "../../../ui/Brand";
import Heading from "../../../ui/Heading";
import Navbar from "../../../ui/Navbar";
import Tags from "../../../ui/Tags";
import ReplyIcon from "@mui/icons-material/Reply";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Reply from "./Reply";

const BlogDetail = ({
  blogs,
  comments,
  sendComment,
  setName,
  setEmail,
  setMessage,
  subBlogs,
  setComments,
}) => {
  const { blogId } = useParams();

  return (
    <div>
      <Navbar />
      <Brand />
      <Tags />
      <Heading />
      <div className="p-8">
        {blogs
          .filter((blog) => blog._id === blogId)
          .map((blog, index) => {
            return (
              <div>
                <div key={index}>
                  <img
                    src={blog.blogImage}
                    className="h-[480px] object-cover w-full rounded-lg"
                    alt=""
                  />
                  <div className="flex my-4 gap-[20px] justify-center ">
                    <div>
                      <div className="flex items-center gap-2 text-[12px] md:text-[14px]">
                        <div>Created : </div>
                        <div>{format(blog.createdAt)}</div>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] md:text-[14px] ">
                        <div>Author : </div>
                        <div>{blog.author}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-extrabold md:text-[24px] ">
                        {blog.title}
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex  justify-center gap-[20px]">
                  <div className="w-1/3">
                    <div className="text-[18px] font-extrabold">Tags</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-[#6A983C] text-[12px] mt-2 bg-[#F4F8EC] p-2 rounded-lg font-extrabold">
                        Food
                      </div>
                      <div className="text-[#6A983C] text-[12px] mt-2 bg-[#F4F8EC] p-2 rounded-lg font-extrabold">
                        Recepies
                      </div>
                      <div className="text-[#6A983C] text-[12px] mt-2 bg-[#F4F8EC] p-2 rounded-lg font-extrabold">
                        Fresh
                      </div>
                      <div className="text-[#6A983C] text-[12px] mt-2 bg-[#F4F8EC] p-2 rounded-lg font-extrabold">
                        vegetable
                      </div>
                    </div>
                    <Link to="/blog">
                      <div className="flex items-center my-4 gap-1">
                        <ReplyIcon />
                        <div className="font-extrabold">Back to Blog</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-2/3">
                    <div className="font-extrabold  text-[14px]  my-4 md:text-[18px]">
                      {blog?.subtitle[0]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {blog.content[0]}
                    </div>
                    <div className="font-extrabold text-[14px]  my-4 md:text-[18px]">
                      {blog?.subtitle[1]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {blog.content[1]}
                    </div>
                    <div className="font-extrabold text-[14px]  my-4 md:text-[18px]">
                      {blog?.subtitle[2]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {blog.content[2]}
                    </div>
                    <div className="font-extrabold text-[14px]  my-4 md:text-[18px]">
                      {blog?.subtitle[3]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {blog.content[3]}
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <div className="font-extrabold">Share</div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <FacebookIcon />
                        <div>Facebook</div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <PinterestIcon />
                        <div>Pinterest</div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <TwitterIcon />
                        <div>Twitter</div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <LinkedInIcon />
                        <div>LinkedIn</div>
                      </div>
                    </div>
                    <div>
                      <Reply
                        setComments={setComments}
                        sendComment={sendComment}
                        setName={setName}
                        setEmail={setEmail}
                        setMessage={setMessage}
                        comments={comments}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div>
          <div className="font-extrabold text-[14px] md:text-[18px] my-4">
            Related topics
          </div>
          <div className="grid grid-cols-4  gap-4 ">
            {subBlogs.map((subBlog, index) => {
              return (
                <div key={index}>
                  <Link to={`/subBlog/${subBlog._id}`}>
                    <img
                      src={subBlog.image}
                      className="w-[269px] h-[180px] object-cover rounded-lg"
                      alt=""
                    />
                  </Link>
                  <div className="text-[14px] md:text-[18px] font-extrabold my-4">
                    {subBlog.title}
                  </div>
                  <div className="text-[12px] md:text-[14px] flex items-center gap-2">
                    <div>{subBlog.author}</div>
                    <div>{format(subBlog.createdAt)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
