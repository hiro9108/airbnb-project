import React from "react";
import { useRouter } from "next/router";

import RoomDetail from "../../components/room/room-detail/RoomDetail";
import AvailabilityBar from "../../components/booking/AvailabilityBar";
import { getRoomById } from "../../components/room_data";

const RoomDetailPage = () => {
  const router = useRouter();
  const roomId = router.query.roomId;
  const room = getRoomById(roomId);

  return (
    <div>
      <RoomDetail room={room} />
      <AvailabilityBar />
    </div>
  );
};

export default RoomDetailPage;
