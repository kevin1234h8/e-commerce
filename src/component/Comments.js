import React from "react";
import { format } from "timeago.js";
const Comments = ({ admin, comment }) => {
  return (
    <div className={`flex ${admin ? "justify-start" : "justify-end"} `}>
      <div className="my-2 border border-[#D1D1D1] p-4 rounded-lg place-items-end min-w-[569px] ">
        <div className="flex items-center gap-[10px] ">
          <div className="w-[40px] h-[40px] rounded-full bg-[#F9F9F9]"></div>
          <div>
            <div className="flex items-center gap-2">
              <div className="font-extrabold">{comment.name}</div>
              <div className="text-[#6A983C] text-[12px] mt-2 bg-[#F4F8EC] p-1 rounded-lg font-extrabold">
                {admin ? "Admin" : "User"}
              </div>
            </div>
            <div className="text-[#bebebe]">{format(comment.createdAt)}</div>
          </div>
        </div>
        <div className="my-2">{comment.message}</div>
      </div>
    </div>
  );
};

export default Comments;
