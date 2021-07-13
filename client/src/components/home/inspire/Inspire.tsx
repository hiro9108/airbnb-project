import React from "react";

const Inspire = () => {
  return (
    <section className="inspire">
      <div className="ml-20 h-96 flex flex-col justify-center ">
        <h2 className="font-medium">
          The Greatest
          <br />
          Outdoors
        </h2>
        <h5 className="font-light">Wishlists curated by Airbnb</h5>
        <button className="mt-8 w-32 py-3 bg-gray-900 text-white rounded-md">
          Get inspired
        </button>
      </div>
    </section>
  );
};

export default Inspire;
