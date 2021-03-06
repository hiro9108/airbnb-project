import React from "react";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageProp } from "../../../types";

const Images: React.FC<imageProp> = ({ images }) => {
  return (
    <div className="lg:grid grid-flow-col grid-cols-2">
      <div className="lg:mr-4">
        <img src={images[0]} alt="living" className="rounded-lg" />
      </div>
      <div className="hidden lg:grid grid-flow-col grid-cols-2 grid-rows-2 gap-2">
        <img src={images[1]} alt="bedroom" className="w-72 h-48 rounded-lg" />
        <img src={images[2]} alt="bedroom" className="w-72 h-48 rounded-lg" />
        <img src={images[3]} alt="kitchen" className="w-72 h-48 rounded-lg" />
        <div className="relative">
          <img
            src={images[4]}
            alt="bathroom"
            className="w-72 h-48 rounded-lg"
          />
          <div className="show_all_photos">
            <FontAwesomeIcon icon={faTh} size="sm" />
            <p className="ml-2">Show all photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
