import React from "react";
import { getAllLives } from "./live-data";

const LiveSelection = () => {
  const lives = getAllLives();

  return (
    <div className="live_section">
      {lives.map((live, index) => {
        return (
          <div key={index} className="cursor-pointer">
            <img
              src={live.image}
              alt={live.title}
              className="rounded-lg w-56 g-56"
            />
            <h4 className="mt-2">{live.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LiveSelection;
