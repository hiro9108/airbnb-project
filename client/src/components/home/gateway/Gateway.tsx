import React from "react";
import { getAllGateways } from "./gateway-data";

const Gateway = () => {
  const gateways = getAllGateways();

  return (
    <section className="mb-16">
      <h3 className="font-semibold mt-10">Inspiration for future getaways</h3>
      <div className="flex border-b-2 border-solid border-gray-300">
        <div className="distinations border-b-2 border-gray-600 border-solid">
          Lake Distinations
        </div>
        <div className="distinations">Mountain Distinations</div>
        <div className="distinations">Coastal Distinations</div>
        <div className="distinations">Island Distinations</div>
        <div className="distinations">Outdoor Distinations</div>
        <div className="distinations">Other Popular Distinations</div>
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-5 mt-5">
        {gateways.map((gateway, index) => {
          return (
            <div key={index} className="font-light cursor-pointer">
              <h6>{gateway.area}</h6>
              <h6 className="text-gray-500">{gateway.city}</h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gateway;
