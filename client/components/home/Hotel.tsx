import React from "react";

const Hotel = () => {
  return (
    <div className="card_wrapper w-72 cursor-pointer">
      <article className="bg-white">
        <div className="flex flex-wrap">
          <p className="px-6 pt-4 order-1">Hotel name</p>
          <img
            src="https://images.unsplash.com/photo-1576675784201-0e142b423952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
            alt="thum"
            className="w-auto"
          />
        </div>
        <div className="px-6">
          <p className="text-sm text-gray-400">Downtown Vancouver</p>
          <p className="py-6 text-right text-lg font-bold">
            CA $95 <span className="text-xs text-gray-400">/per night</span>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Hotel;
