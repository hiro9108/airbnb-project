import React, { FC } from "react";
import { data } from "../../pages/post/hotelData";

type dataProps = {
  data: data[];
};

const Hotel: React.FC<dataProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center mx-20">
      {data.map((hotel) => {
        return (
          <div
            id={`${hotel.id}`}
            className="card_wrapper w-72 cursor-pointer mx-6"
          >
            <article className="bg-white">
              <div className="flex flex-wrap">
                <p className="px-6 pt-4 order-1">{hotel.name}</p>
                <img src={hotel.imageUrl} alt="thum" className="w-auto" />
              </div>
              <div className="px-6">
                <p className="text-sm text-gray-400">{hotel.location}</p>
                <p className="py-6 text-right text-lg font-bold">
                  CA ${hotel.price}{" "}
                  <span className="text-xs text-gray-400">/per night</span>
                </p>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Hotel;
