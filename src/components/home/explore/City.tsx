import React from "react";
import { getAllCities } from "./city-data";

const City = () => {
  const cities = getAllCities();

  return (
    <div className="city">
      {cities.map((city, index) => {
        return (
          <div key={index} className="flex cursor-pointer">
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
        );
      })}
    </div>
  );
};

export default City;
