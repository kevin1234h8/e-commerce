import React from "react";
import { Rating } from "@mui/material";
const RatingAdjust = ({ number }) => {
  return (
    <Rating name="half-rating" defaultValue={number} precision={0.5} readOnly />
  );
};

export default RatingAdjust;
