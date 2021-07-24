import React from "react";
import { faStar, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ownerProp } from "../../../types";

const Owner: React.FC<ownerProp> = ({ owner }) => {
  return (
    <div className="d_c_section">
      <div className="flex items-center">
        <img src={owner.icon} alt="owner" className="h-20 w-20 rounded-full" />
        <div className="ml-5">
          <h4>Hosted by {owner.name}</h4>
          <h6 className="text-gray-500">Joined in {owner.joined}</h6>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="flex mr-5">
          <FontAwesomeIcon icon={faStar} size="lg" className="text-pink" />
          <span className="font-light ml-2">{owner.reviewsCount} Reviews</span>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faClipboardCheck}
            size="lg"
            className="text-pink"
          />
          <span className="font-light ml-2">Identity verified</span>
        </div>
      </div>
      <div className="my-8">
        <h5 className="font-light mt-2">{owner.msg}</h5>
      </div>
      <div className="font-light">
        <h5 className="my-2">Policy number: {owner.policyNumber}</h5>
        <h5 className="my-2">Language: {owner.language}</h5>
        <h5 className="my-2">Response rate: {owner.responceRate}%</h5>
        <h5 className="my-2">Response time: {owner.responceTime}</h5>
      </div>
      <div className="border border-solid border-gray-800 rounded-lg py-3 w-52 text-center mt-6">
        Contact host
      </div>
    </div>
  );
};

export default Owner;
