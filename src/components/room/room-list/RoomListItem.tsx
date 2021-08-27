import React, { useState, useEffect } from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { getAllRooms } from "../../room_data";
import Link from "next/link";
import { searchProp } from "../../../types";
import { useQuery } from "@apollo/client";
import { GET_ALL_CITIES } from "../../../pages/api/apollo-room-data";

const RoomItem: React.FC<searchProp> = ({ searchItem }) => {
  // Get data from local.
  // const datas = getAllRooms();

  const { loading, error, data } = useQuery(GET_ALL_CITIES);

  const filterData = (arr) => {
    if (searchItem) {
      return arr.filter((item) => {
        if (
          JSON.parse(item.address)
            .city.toLowerCase()
            .includes(searchItem.toLowerCase())
        ) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return arr;
    }
  };

  return (
    <div>
      {data &&
        filterData(data.listHotelTables.items).map((data, index) => {
          console.log("data.images", JSON.parse(data.images)[0]);

          return (
            <Link href={`/room/${data.id}`} key={index}>
              <div className="flex py-5 border-b border-gray-300 border-solid cursor-pointer">
                <div>
                  <img
                    src={JSON.parse(data.images)[0]}
                    alt="house"
                    className="w-72 rounded-lg"
                  />
                </div>
                <div className="ml-5 flex flex-col justify-center">
                  <h6 className="text-gray-500">{data.subTitle}</h6>
                  <h5 className="font-medium">{data.name} </h5>
                  <hr className="w-10 text-gray-600 my-3"></hr>
                  <h6 className="text-gray-500 font-light">
                    {JSON.parse(data.room).maximumGuest} guests・
                    {JSON.parse(data.room).bedroom}・{JSON.parse(data.room).bed}
                    ・{JSON.parse(data.room).bathroom}
                  </h6>
                  <h6 className="text-gray-500 font-light">
                    {JSON.parse(data.amenities)[0].amenity}・
                    {JSON.parse(data.amenities)[1].amenity}・
                    {JSON.parse(data.amenities)[2].amenity}
                  </h6>
                  <div className="flex items-center mt-10">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="sm"
                      className="text-pink"
                    />
                    <h6 className="mx-1">{data.star}</h6>
                    <a href="">
                      <span className="text-sm text-gray-500">
                        ({data.reviewCount} reviews)
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default RoomItem;
