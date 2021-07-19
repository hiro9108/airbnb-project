import React from "react";

import { getAllReviews } from "./reviews-data";

const ReviewItem = () => {
  const reviews = getAllReviews();

  return (
    <div className="mt-10 grid grid-flow-row grid-cols-2 grid-rows-3 gap-8">
      {reviews.map((review, index) => {
        return (
          <div key={index}>
            <div className="flex items-center">
              <img
                src={review.icon}
                alt={review.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h5>{review.name}</h5>
                <h6 className="text-gray-500">{review.date}</h6>
              </div>
            </div>
            <h6 className="font-light px-2 py-3">{review.comment}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewItem;
