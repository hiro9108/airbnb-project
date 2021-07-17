import React from "react";
import { getAllSelections } from "./room-list-data";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoomItem from "./RoomItem";

const RoomList = () => {
  const selections = getAllSelections();
  return (
    <div className="px-10 flex mt-7">
      <div className="w-sms mr-10">
        <div className="">
          <p>300+ stays</p>
          <h3 className="font-semibold">Stays in Burnaby</h3>
          <div className="flex">
            {selections.map((selection, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-400 border-solid rounded-full
                py-2 px-4 text-sm mr-4 my-7"
                >
                  {selection.title}
                </div>
              );
            })}
          </div>
          <h6 className="text-gray-400 pb-5">
            Enter dates and number of guests to see the total price per night.
          </h6>
        </div>
        <div className="border-b border-t border-gray-200 border-solid flex py-7">
          <FontAwesomeIcon icon={faTrophy} size="lg" className="text-pink" />
          <h6 className="font-medium mx-2">
            More than 35,000 guests have stayed in Burnaby.
          </h6>
          <h6 className="font-light">
            On average they rated their stays 4.7 out of 5 stars.
          </h6>
        </div>
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
      <div className="w-xss right-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14314.98879913607!2d-123.12164308222374!3d49.2833606067369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2sca!4v1626242090019!5m2!1sen!2sca"
          width="600"
          height="450"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default RoomList;
