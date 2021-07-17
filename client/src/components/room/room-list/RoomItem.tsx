import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RoomItem = () => {
  return (
    <div className="flex py-5 border-b border-gray-200 border-solid">
      <div>
        <img src="rooms/house.jpeg" alt="house" className="w-72 rounded-lg" />
      </div>
      <div className="ml-5 flex flex-col justify-center">
        <h6 className="text-gray-400">Entire guest suite in Burnaby</h6>
        <h5 className="font-medium">
          Metrotown New 1 bedroom suite near Deer Lake
        </h5>
        <hr className="w-10 text-gray-500 my-3"></hr>
        <h6 className="text-gray-400 font-light">
          2 guests・1bedroom・1bed・1bath
        </h6>
        <h6 className="text-gray-400 font-light">Wifi・1bedroom・1bed</h6>
        <div className="flex items-center mt-10">
          <FontAwesomeIcon icon={faStar} size="sm" className="text-pink" />
          <h6 className="mx-1">4.82</h6>
          <a href="">
            <span className="text-sm text-gray-500">(17 reviews)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
