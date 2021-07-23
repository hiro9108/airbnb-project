import React from "react";
import Images from "../room-detail/Images";
import Top from "../room-detail/Top";
import Details from "../room-detail/Details";
import BookingContainer from "../../booking/BookingContainer";
import Reviews from "../room-detail/Reviews";
import Map from "../room-detail/Map";
import Owner from "../room-detail/Owner";
import ThingsKnow from "../room-detail/ThingsKnow";
import { getRoomById } from "../../room_data";
import { getOwnerById } from "../../owner_data";
import { roomProp } from "../../../types";

const RoomDetail: React.FC<roomProp> = (props) => {
  const owner = getOwnerById(props.room.ownerId);

  return (
    <div className="room_detail">
      <div>
        <Top
          name={props.room.name}
          address={props.room.address}
          star={props.room.star}
          reviewCount={props.room.reviewCount}
        />
        <Images images={props.room.images} />
        <div className="flex">
          <div className="w-full md:w-smss lg:w-sms">
            <Details
              subTitle={props.room.subTitle}
              highLights={props.room.highLights}
              room={props.room.room}
              icon={owner.icon}
              additionalInfo={props.room.additionalInfo}
              description={props.room.description}
              bedRoomInfo={props.room.bedRoomInfo}
              amenities={props.room.amenities}
              ownerName={owner.name}
            />
          </div>
          <div className="hidden md:block w-xss">
            <BookingContainer />
          </div>
        </div>
        <Reviews
          star={props.room.star}
          reviewCount={props.room.reviewCount}
          reviews={props.room.reviews}
        />
        <Map address={props.room.address} map={props.room.map} />
        <Owner owner={owner} />
        <ThingsKnow
          rules={props.room.rules}
          healthInfo={props.room.healthInfo}
          cancelPolicy={props.room.cancelPolicy}
        />
      </div>
    </div>
  );
};

export default RoomDetail;
