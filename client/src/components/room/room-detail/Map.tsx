import React from "react";

const Map = () => {
  return (
    <div className="d_c_section">
      <h4 className="font-medium mb-6">Where you'll be</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12759.34836048349!2d-123.12783380475831!3d49.281169975414755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671821c149771%3A0xd64c377f2df4b19f!2sCornerstone%20International%20Community%20College%20of%20Canada%20-%20Tech%20Campus!5e0!3m2!1sen!2sca!4v1626215793476!5m2!1sen!2sca"
        width="1200"
        height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
      <h5 className="mt-6">Vancouver, British Columbia, Canada</h5>
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
