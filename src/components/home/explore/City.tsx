import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { getAllCities } from "./city-data";
import { setSearchItem } from "../../../features/searchSlice";

const City = () => {
  const dispatch = useDispatch();
  const cities = getAllCities();

  const handleSearch = (city) => {
    console.log(city);
    dispatch(setSearchItem(city));
  };

  return (
    <div className="city_section">
      {cities &&
        cities.map((city, index) => {
          return (
            <Link href={`/room/list`} key={index}>
              <div
                className="flex cursor-pointer"
                onClick={() => handleSearch(city.city)}
              >
                <div>
                  <img
                    src={city.image}
                    alt={city.city}
                    className="w-16 rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-center ml-4">
                  <h5 className="font-medium">{city.city}</h5>
                  <h6 className="font-normal">{city.distance}</h6>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default City;
