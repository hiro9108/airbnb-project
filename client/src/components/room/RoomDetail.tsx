import React from "react";
import Images from "./room-detail/Images";
import Top from "./room-detail/Top";
import Details from "./room-detail/Details";
import BookingContainer from "./booking/BookingContainer";
import Reviews from "./room-detail/Reviews";
import Map from "./room-detail/Map";
import Owner from "./room-detail/Owner";
import ThingsKnow from "./room-detail/ThingsKnow";

const RoomDetail = () => {
  return (
    <div className="room_detail">
      <Top />
      <Images />
      <div className="grid grid-flow-col grid-cols-2 d_c_section">
        <div>
          <Details />
        </div>
        <div className="">
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
