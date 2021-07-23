import React from "react";
import Calender from "./Calender";
import { faBed, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { detailProp } from "../../../types";

const Details: React.FC<detailProp> = ({
  subTitle,
  highLights,
  room,
  icon,
  additionalInfo,
  description,
  bedRoomInfo,
  amenities,
  ownerName,
}) => {
  return (
    <div>
      {/* top part */}
      <div className="flex justify-between mt-10 d_c_section ">
        <div>
          <h4 className="font-medium">{subTitle}</h4>
          <h5 className="font-light">
            {room.maximumGuest} guests · {room.bedroom} · {room.bed} ·{" "}
            {room.bathroom}
          </h5>
        </div>
        <div>
          <img src={icon} alt="owner" className="rounded-full w-16 h-16" />
        </div>
      </div>

      {/* second part */}
      <ul className="d_c_section">
        {highLights.map((highlight, index) => {
          return (
            <li className="flex my-4" key={index}>
              <div className="w-12 text-center">
                <FontAwesomeIcon icon={highlight.icon} size="lg" />
              </div>
              <div className="">
                <h5 className="font-medium">{highlight.title}</h5>
                <p className="text-gray-500">{highlight.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* third part */}
      <div className=" d_c_section">
        {additionalInfo.map((info, index) => {
          return (
            <div className="flex my-2" key={index}>
              <span className="mx-3 text-gray-500">・</span>
              <h5 className="font-light">{info}</h5>
            </div>
          );
        })}
      </div>

      {/* forth part */}
      <div className="d_c_section">
        <h4 className="font-medium mb-6">All about {ownerName}'s place</h4>
        <h6 className="font-light">{description}</h6>
        <div className="cursor-pointer flex items-center mt-6">
          <a href="" className="mr-2">
            Show more
          </a>
          <span className="text-xl">&gt;</span>
        </div>
      </div>

      {/* fifth part */}
      <div className="d_c_section">
        <h4 className="font-medium mb-6">Places for sleeping</h4>
        <div className="flex overflow-x-scroll w-xxxl">
          {bedRoomInfo.map((bedRoom, index) => {
            return (
              <div className="bed_card" key={index}>
                <FontAwesomeIcon icon={faBed} size="lg" />
                <h5 className="mt-4 mb-1">{bedRoom.bed}</h5>
                <h6>{bedRoom.type}</h6>
              </div>
            );
          })}
        </div>
      </div>

      {/* sixth part */}
      <div className="d_c_section">
        <h4 className="font-medium mb-6">What this place offer</h4>
        <div className="grid grid-flow-row grid-cols-2">
          {amenities.map((amenity, index) => {
            return (
              <div className="flex my-3" key={index}>
                <FontAwesomeIcon icon={amenity.icon} size="lg" />
                <h5 className="font-light ml-4">{amenity.amenity}</h5>
              </div>
            );
          })}
        </div>
        <div className="border border-solid border-gray-800 rounded-lg py-3 w-52 text-center mt-6">
          Show all 22 amenities
        </div>
      </div>

      {/* seventh part */}
      <div className="py-6 ">
        <h4 className="font-medium mb-2">Select check-in date</h4>
        <h6 className="font-light text-gray-500">Minimum stay: 27 nights</h6>
        <Calender />
        <div className="flex justify-between">
          <FontAwesomeIcon icon={faKeyboard} size="lg" />
          <h6 className="font-medium">
            <a href="">Clear date</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Details;
