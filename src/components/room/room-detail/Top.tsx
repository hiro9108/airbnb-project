import React from "react";
import {
  faStar,
  faShareSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top = () => {
  return (
    <div>
      <h3>DOWNTOWN Room with Private Bathroom</h3>
      <div className="md:flex justify-between items-center my-4">
        <div className="md:flex items-center">
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faStar} size="sm" className="text-pink" />
            <h6 className="mx-1">4.82</h6>
            <a href="">
              <span className="text-sm text-gray-500">(17 reviews)</span>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <span className="hidden md:block mx-3 text-gray-500">・</span>
            <a href="">
              <h6 className="text-sm text-gray-500">
                Vancouver, British Columbia, Canada Share
              </h6>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mr-5">
            <FontAwesomeIcon icon={faShareSquare} size="sm" />
            <span className="h_d_icon">share</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeart} size="sm" />
            <span className="h_d_icon">save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
