import React from "react";

const ReviewModal = () => {
  return (
    <div className="flex items-center justify-center mb-4">
      <textarea
        name=""
        id=""
        cols="30"
        placeholder="Write your review here..."
        rows="30"
        className="resize-none w-96 h-80 break-words  border-2 border-[#D1D1D1] rounded-[12px] p-4 outline-none"
      ></textarea>
    </div>
  );
};

export default ReviewModal;
