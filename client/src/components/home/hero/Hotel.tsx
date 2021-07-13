import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../../types";
import { selectSearchItem } from "../../../features/searchSlice";

type dataProps = {
  data: data[];
};

const Hotel: React.FC<dataProps> = ({ data }) => {
  const searchItem = useSelector(selectSearchItem);

  const filterData = (arr) => {
    if (searchItem) {
      return arr.filter((item) => {
        if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
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
    <div className="flex flex-wrap justify-center mx-20">
      {filterData(data).map((hotel) => {
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
                  CA ${hotel.price}
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
