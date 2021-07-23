import React from "react";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllRooms } from "../../room_data";
import Link from "next/link";
import { searchProp } from "../../../types";

const RoomItem: React.FC<searchProp> = ({ searchItem }) => {
  const datas = getAllRooms();

  const filterData = (arr) => {
    if (searchItem) {
      return arr.filter((item) => {
        if (
          item.address.city.toLowerCase().includes(searchItem.toLowerCase())
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
      {filterData(datas).map((data, index) => {
        return (
          <Link href={`/room/${data.id}`} key={index}>
            <div className="flex py-5 border-b border-gray-300 border-solid cursor-pointer">
              <div>
                <img
                  src={data.images[0]}
                  alt="house"
                  className="w-72 rounded-lg"
                />
              </div>
              <div className="ml-5 flex flex-col justify-center">
                <h6 className="text-gray-500">{data.subTitle}</h6>
                <h5 className="font-medium">{data.name} </h5>
                <hr className="w-10 text-gray-600 my-3"></hr>
                <h6 className="text-gray-500 font-light">
                  {data.room.maximumGuest} guests・{data.room.bedroom}・
                  {data.room.bed}・{data.room.bathroom}
                </h6>
                <h6 className="text-gray-500 font-light">
                  {data.amenities[0].amenity}・{data.amenities[1].amenity}・
                  {data.amenities[2].amenity}
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
