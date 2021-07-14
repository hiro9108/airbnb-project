import React from "react";

const UserDropDown = () => {
  return (
    <div
      className="w-52 h-28 bg-white text-gray-800 font-medium
      border border-white border-solid shadow-2xl rounded-lg
      absolute top-20 right-16
      flex flex-col justify-center items-center"
    >
      <h5 className="my-1">Log in</h5>
      <h5 className="my-1">Sign up</h5>
    </div>
  );
};

export default UserDropDown;
