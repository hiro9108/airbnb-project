import React from "react";
import { faStar, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Owner = () => {
  return (
    <div className="d_c_section">
      <div className="flex items-center">
        <img
          src="rooms/person.jpeg"
          alt="owner"
          className="h-20 w-20 rounded-full"
        />
        <div className="ml-5">
          <h4>Hosted by Tatiane</h4>
          <h6 className="text-gray-500">Joined in December 2014</h6>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="flex mr-5">
          <FontAwesomeIcon icon={faStar} size="lg" className="text-pink" />
          <span className="font-light ml-2">171 Reviews</span>
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
        <h5 className="font-semibold">During your stay</h5>
        <h5 className="font-light mt-2">Feel free to contact me anytime.</h5>
      </div>
      <div className="font-light">
        <h5 className="my-2">Policy number: 21157396</h5>
        <h5 className="my-2">Language: Português</h5>
        <h5 className="my-2">Response rate: 64%</h5>
        <h5 className="my-2">Response time: within a day</h5>
      </div>
      <div className="border border-solid border-gray-800 rounded-lg py-3 w-52 text-center mt-6">
        Contact host
      </div>
    </div>
  );
};

export default Owner;
