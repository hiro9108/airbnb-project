import React from "react";
import { getAllLives } from "./live-data";

const LiveSelection = () => {
  const lives = getAllLives();

  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      {lives.map((live, index) => {
        return (
          <div key={index} className="cursor-pointer">
            <img src={live.image} alt={live.title} className="rounded-lg" />
            <h4 className="mt-2">{live.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LiveSelection;
