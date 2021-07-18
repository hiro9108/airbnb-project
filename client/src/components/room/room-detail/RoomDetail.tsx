import React from "react";
import Images from "../room-detail/Images";
import Top from "../room-detail/Top";
import Details from "../room-detail/Details";
import BookingContainer from "../booking/BookingContainer";
import Reviews from "../room-detail/Reviews";
import Map from "../room-detail/Map";
import Owner from "../room-detail/Owner";
import ThingsKnow from "../room-detail/ThingsKnow";

const RoomDetail = () => {
  return (
    <div className="room_detail">
      <Top />
      <Images />
      <div className="flex">
        <div className="w-full md:w-smss lg:w-sms">
          <Details />
        </div>
        <div className="hidden md:block w-xss">
          <BookingContainer />
        </div>
      </div>
      <Reviews />
      <Map />
      <Owner />
      <ThingsKnow />
    </div>
  );
};

export default RoomDetail;
