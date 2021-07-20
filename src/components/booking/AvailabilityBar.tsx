import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AvailabilityBar = () => {
  return (
    <div className="availability_bar">
      <div>
        <h5>Add dates for prices</h5>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} size="sm" className="text-pink" />
          <h6 className="mx-1">4.82</h6>
          <span className="text-xs text-gray-500">(17 reviews)</span>
        </div>
      </div>
      <div>
        <Link href={"/booking"}>
          <button className="check_btn">check availability</button>
        </Link>
      </div>
    </div>
  );
};

export default AvailabilityBar;
