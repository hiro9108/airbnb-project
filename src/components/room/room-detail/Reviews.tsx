import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUserById } from "../../user_data";
import { reviewProp } from "../../../types";

const Reviews: React.FC<reviewProp> = ({ star, reviewCount, reviews }) => {
  return (
    <div className="d_c_section border-t">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faStar} size="sm" className="text-pink" />
        <h5 className="mx-1">{star}</h5>
        <span className="mx-1">・</span>
        <span>{reviewCount} reviews</span>
      </div>
      <div className="mt-10 grid grid-flow-row grid-cols-2 grid-rows-3 gap-8">
        {reviews.map((review, index) => {
          const user = getUserById(review.userId);
          return (
            <div key={index}>
              <div className="flex items-center">
                <img
                  src={user.icon}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h5>{user.name}</h5>
                  <h6 className="text-gray-500">{review.date}</h6>
                </div>
              </div>
              <h6 className="font-light px-2 py-3">{review.comment}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
