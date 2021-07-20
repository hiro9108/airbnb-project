import React from "react";
import City from "./City";

const Explore = () => {
  return (
    <section>
      <h3 className="font-semibold my-10">Explore nearby</h3>
      <div className="overflow-y-hidden">
        <City />
      </div>
    </section>
  );
};

export default Explore;
