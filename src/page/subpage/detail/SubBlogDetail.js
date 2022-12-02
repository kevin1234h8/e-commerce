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

const SubBlogDetail = ({
  subBlogs,
  comments,
  sendComment,
  setName,
  setEmail,
  setMessage,
}) => {
  const { id } = useParams();
  console.log(subBlogs);
  return (
    <div>
      <Navbar />
      <Brand />
      <Tags />
      <Heading />
      <div className="p-8">
        {subBlogs
          .filter((subBlog) => subBlog._id === id)
          .map((subBlog, index) => {
            return (
              <div key={index}>
                <div>
                  <img
                    src={subBlog.image}
                    className="h-[480px] object-contain w-full rounded-lg"
                    alt=""
                  />
                  <div className="flex my-4 gap-[20px] justify-center ">
                    <div>
                      <div className="flex items-center gap-2 text-[12px] md:text-[14px]">
                        <div>Created : </div>
                        <div>{format(subBlog.createdAt)}</div>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] md:text-[14px] ">
                        <div>Author : </div>
                        <div>{subBlog.author}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[18px] font-extrabold md:text-[24px] ">
                        {subBlog.title}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col gap-[20px] md:grid-flow-col">
                  <div className="w-full ">
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
                      <div className="flex items-center  mt-8 gap-1">
                        <ReplyIcon />
                        <div className="font-extrabold">Back to Blog</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full">
                    <div className="font-extrabold  text-[14px]  my-4 md:text-[18px]">
                      {subBlog?.subtitle[0]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {subBlog.content[0]}
                    </div>
                    <div className="font-extrabold text-[14px]  my-4 md:text-[18px]">
                      {subBlog?.subtitle[1]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {subBlog.content[1]}
                    </div>
                    <div className="font-extrabold text-[14px]  my-4 md:text-[18px]">
                      {subBlog?.subtitle[2]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {subBlog.content[2]}
                    </div>
                    <div className="font-extrabold text-[14px]  my-4 md:text-[18px]">
                      {subBlog?.subtitle[3]}
                    </div>
                    <div className="text-[12px] md:text-[16px]">
                      {subBlog.content[3]}
                    </div>
                    <div className="grid items-center gap-[20px] md:grid-flow-col mt-6">
                      <div className="font-extrabold text-[14px] md:text-[16px] ">
                        Share
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <FacebookIcon fontSize="small" />
                        <div className="text-[14px] md:text-[16px]">
                          Facebook
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <PinterestIcon fontSize="small" />
                        <div className="text-[14px] md:text-[16px]">
                          Pinterest
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <TwitterIcon fontSize="small" />
                        <div className="text-[14px] md:text-[16px]">
                          Twitter
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] p-2 rounded-lg">
                        <LinkedInIcon fontSize="small" />
                        <div className="text-[14px] md:text-[16px]">
                          LinkedIn
                        </div>
                      </div>
                    </div>
                    <div>
                      <Reply
                        id={id}
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
      </div>
      <div className="p-8">
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
                    className="w-[269px] h-[180px] object-contain rounded-lg"
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
  );
};

export default SubBlogDetail;
