import React from "react";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Images = () => {
  return (
    <div className="lg:grid grid-flow-col grid-cols-2">
      <div className="lg:mr-4">
        <img src="rooms/livingroom.jpeg" alt="living" className="rounded-lg" />
      </div>
      <div className="hidden lg:grid grid-flow-col grid-cols-2 grid-rows-2 gap-2">
        <img
          src="rooms/bedroom.jpeg"
          alt="bedroom"
          className="w-72 h-48 rounded-lg"
        />
        <img
          src="rooms/bedroom2.jpeg"
          alt="bedroom"
          className="w-72 h-48 rounded-lg"
        />
        <img
          src="rooms/kitchen.jpeg"
          alt="kitchen"
          className="w-72 h-48 rounded-lg"
        />
        <div className="relative">
          <img
            src="rooms/bathroom.jpeg"
            alt="bathroom"
            className="w-72 h-48 rounded-lg"
          />
          <div className="show_all_photos">
            <FontAwesomeIcon icon={faTh} size="sm" className="" />
            <p className="ml-2">Show all photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
