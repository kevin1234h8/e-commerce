import axios from "axios";
import React, { useState } from "react";
import Comments from "../../../component/Comments";

const Reply = ({ comments, sendComment, setName, setEmail, setMessage }) => {
  return (
    <div className="my-8">
      <div className="text-[14px] md:text-[20px] font-extrabold">
        Leave a Reply
      </div>
      <div className="text-[12px] md:text-[14px]">
        Already have an account ? <span className="underline">Sign in</span> to
        leave a reply.
      </div>
      <div className="text-[12px] md:text-[14px]">
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="my-2">
            <div>Name</div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="px-4 py-2 w-full bg-[#F9F9F9] border-[#D1D1D1] border rounded-lg outline-none"
            />
          </div>
          <div className="my-2">
            <div>Email</div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full bg-[#F9F9F9] border-[#D1D1D1] border rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="my-2 flex items-center px-4 py-2 w-full bg-[#F9F9F9] border-[#D1D1D1] border gap-4 rounded-lg outline-none">
          <input
            type="checkbox"
            className="px-4 py-2 bg-[#F9F9F9] border-[#D1D1D1] border rounded-lg outline-none accent-[#6A983C]"
          />
          <div>
            Save my name and email in this browser for a next time comment.
          </div>
        </div>
        <div className="my-2">
          <div>Comment</div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Space for your comments"
            className="bg-[#F9F9F9] border-[#D1D1D1] border p-4 outline-none resize-none w-full h-[100px] break-words rounded-lg"
          ></textarea>
          <button
            onClick={sendComment}
            className="bg-[#6A983C] px-8 py-2 rounded-[12px] text-white border-2 border-[#46760A] hover:bg-[#446127] duration-150 my-2"
          >
            send a comment
          </button>
        </div>
        <div className="my-2">
          <div className="text-[20px] font-extrabold my-4">Comments</div>
          {comments?.map((comment, index) => {
            return (
              <Comments
                key={index}
                comment={comment}
                admin={comment.isAdmin}
                sendComment={sendComment}
                setName={setName}
                setEmail={setEmail}
                setMessage={setMessage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reply;
