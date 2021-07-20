import React from "react";
import { getAllDiscover } from "./discover-data";

const DiscoverSelection = () => {
  const discovers = getAllDiscover();

  return (
    <div className="discover_section">
      {discovers.map((discover, index) => {
        return (
          <div key={index} className="cursor-pointer">
            <img
              src={discover.image}
              alt={discover.title}
              className="rounded-lg"
            />
            <h4 className="mt-2">{discover.title}</h4>
            <h6>{discover.description}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default DiscoverSelection;
