import React from "react";
import RoomDetail from "../components/room/room-detail/RoomDetail";
import AvailabilityBar from "../components/booking/AvailabilityBar";

const RoomDetailPage = () => {
  return (
    <div>
      <RoomDetail />
      <AvailabilityBar />
    </div>
  );
};

export default RoomDetailPage;
