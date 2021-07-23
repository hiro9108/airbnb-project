import React from "react";
import { mapProp } from "../../../types";

const Map: React.FC<mapProp> = ({ address, map }) => {
  return (
    <div className="d_c_section">
      <h4 className="font-medium mb-6">Where you'll be</h4>
      <div className="gmap">
        <iframe src={map}></iframe>
      </div>
      <h5 className="mt-6">
        {address.city}, {address.province}, {address.country}
      </h5>
      <h5 className="pr-20 font-light mt-6">
        Downtown is known for a buzzing nightlife scene on neon-lit Granville
        Street or trendy Davie Street, with cuisines from all over the world and
        entertainment for all. The house is steps away from Davie street where
        rainbow flags and sunburst banners adorn the lampposts in this lively
        neighbourhood.
      </h5>
      <div className="cursor-pointer flex items-center mt-6">
        <a href="" className="mr-2">
          Show more
        </a>
        <span className="text-xl">&gt;</span>
      </div>
    </div>
  );
};

export default Map;
