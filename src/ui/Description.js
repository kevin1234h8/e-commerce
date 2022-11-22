import React, { useState } from "react";
import Number from "../component/Number";
import gsap from "gsap";
import { useRef } from "react";
import RatingAdjust from "../component/RatingAdjust";
import Reviews from "../component/Reviews";
import Comment from "../component/Comment";
import ReviewModal from "../component/ReviewModal";
import Button from "../component/Button";
const Description = ({ products }) => {
  const [openDescriptions, setOpenDescriptions] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [openQuestions, setOpenQuestions] = useState(false);
  const descriptionRef = useRef();
  const descriptionItemRef = useRef([]);
  const reviewRef = useRef([]);

  const openDescription = () => {
    setOpenDescriptions(true);
    setOpenReviews(false);
    setOpenQuestions(false);

    gsap.from(descriptionItemRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.3,
      stagger: 0.1,
    });
  };
  const openReview = () => {
    setOpenDescriptions(false);
    setOpenReviews(true);
    setOpenQuestions(false);
  };
  const openQuestion = () => {
    setOpenDescriptions(false);
    setOpenReviews(false);
    setOpenQuestions(true);
  };
  return (
    <>
      <div className="flex items-center justify-between pb-6 ">
        <div className=" relative text-[24px] pr-4 py-4 w-full  font-extrabold description">
          <button onClick={openDescription}>
            <div>Description</div>
          </button>
        </div>
        <div className="relative flex items-center text-[24px] pr-4 py-4 w-full  description font-extrabold">
          <button onClick={openReview}>Reviews</button>
          <Number number={18} />
        </div>
        <div className=" relative flex items-center text-[24px] pr-4 py-4 w-full description  font-extrabold">
          <button onClick={openQuestion}>Questions</button>
          <Number number={2} />
        </div>
      </div>
      {/* description */}
      {openDescriptions === true && (
        <div ref={descriptionRef}>
          <div className="font-bold my-6">Spec</div>
          <div>
            {products.spec?.map((val, index) => {
              return (
                <div
                  className="my-2"
                  ref={(el) => (descriptionItemRef.current[index] = el)}
                  key={index}
                >
                  {index + 1}. {val}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* reviews */}
      <div
        ref={reviewRef}
        className={`${openReviews === false ? " scale-0" : " scale-100"} `}
      >
        <div>
          <div className="font-bold my-6">Product Reviews</div>
          <div>
            Of course we utilize our own service to constantly gather feedback
            from the businesses, online marketers and agencies that use
            GatherUp. Read what our customers have to say about our customer
            feedback and online review platform. Please request a demo or
            sign-up for an account.
          </div>
          <div className="flex items-center">
            <div className="text-2xl font-bold my-8 mr-2">4.2</div>
            <div className="mr-2">
              <div>
                Out of <br /> 5 Stars
              </div>
            </div>
            <div>
              <RatingAdjust number={5} />
            </div>
          </div>
          <div className="my-4">Overal Rating of 347 reviews</div>
          <div>
            <Reviews backgroundColor="81be81" star={5} width={65} />
            <Reviews backgroundColor="cbe58b" star={4} width={20} />
            <Reviews backgroundColor="f5ee94" star={3} width={10} />
            <Reviews backgroundColor="eec886" star={2} width={7} />
            <Reviews backgroundColor="e9876d" star={1} width={3} />
          </div>
          <div className="text-2xl font-bold my-4">All review</div>
          <div className="flex">
            <div className="product">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
            <div className="categories">
              <div className="flex flex-col place-items-end">
                <ReviewModal />
                <Button text={"Add Review"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
