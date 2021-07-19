import React from "react";
import DiscoverSelection from "./DiscoverSelection";

const Discover = () => {
  return (
    <section>
      <h3 className="font-semibold mt-10">Discover Experiences</h3>
      <h4 className="mb-10 font-light">
        Unique activities with local experts—in person or online.
      </h4>
      <div>
        <DiscoverSelection />
      </div>
    </section>
  );
};

export default Discover;
