import React from "react";
import Calender from "./Calender";
import {
  faMapMarkerAlt,
  faKey,
  faBookmark,
  faBed,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllAmenities } from "./amenities";

const Details = () => {
  const amenities = getAllAmenities();

  return (
    <div>
      {/* top part */}
      <div className="flex justify-between mt-10 d_c_section ">
        <div>
          <h4 className="font-medium">
            Private room in house hosted by Tatiane
          </h4>
          <h5 className="font-light">
            2 guests · 1 bedroom · 1 bed · 1 shared bath
          </h5>
        </div>
        <div>
          <img
            src="rooms/person.jpeg"
            alt="owner"
            className="rounded-full w-16 h-16"
          />
        </div>
      </div>

      {/* second part */}
      <ul className="d_c_section">
        <li className="flex my-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
          <div className="ml-4">
            <h5 className="font-medium">Great Location</h5>
            <p className="text-gray-500">
              100% of recent guests gave the location a 5-star rating.
            </p>
          </div>
        </li>
        <li className="flex my-4">
          <FontAwesomeIcon icon={faKey} size="lg" />
          <div className="ml-4">
            <h5 className="font-medium">Great check-in experience</h5>
            <p className="text-gray-500">
              100% of recent guests gave the check-in process a 5-star rating.
            </p>
          </div>
        </li>
        <li className="flex my-3">
          <FontAwesomeIcon icon={faBookmark} size="lg" />
          <div className="ml-4">
            <h5 className="font-medium">Wifi</h5>
            <p className="text-gray-500">
              Guests often search for this popular amenity
            </p>
          </div>
        </li>
      </ul>

      {/* third part */}
      <div className="flex d_c_section">
        <span className="mx-3 text-gray-500">・</span>
        <h5 className="font-light">Committed to Enhanced Clean</h5>
      </div>

      {/* forth part */}
      <div className="d_c_section">
        <h4 className="font-medium mb-6">All about Tatiane’s place</h4>
        <h6 className="font-light">
          Located in the heart of downtown on a beautiful residential block on
          Thurlow street close to Nelson park, Starbucks, and popular
          attractions. This spacious house is steps away from all the shopping,
          international cuisines, night life activities downtown and all the
          amenities that guests need to make Downtown so livable without
          transportation.. Within a 15 minute walk is the SkyTrain station.
          Perfect for international travellers or students who want to enjoy
          Downtown Vancouver....
        </h6>
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
        <div className="border border-solid border-gray-300 p-9 w-56 rounded-xl">
          <FontAwesomeIcon icon={faBed} size="lg" />
          <h5 className="mt-4 mb-1">Bedroom 1</h5>
          <h6>1 queen bed</h6>
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
      <div className="pt-6">
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
