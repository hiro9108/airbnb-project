import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return (
    <div className="d_c_section">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faStar} size="sm" className="text-pink" />
        <h5 className="mx-1">4.82</h5>
        <span className="mx-1">・</span>
        <span>17 reviews</span>
      </div>
      <ReviewItem />
    </div>
  );
};

export default Reviews;
