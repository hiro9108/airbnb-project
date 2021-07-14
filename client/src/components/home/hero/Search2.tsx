import React, { useState } from "react";
import {
  faSearch,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search2 = () => {
  const [guest, setGuest] = useState(1);

  const submit = () => {};

  const handleMinus = () => {
    if (guest === 1) return;
    setGuest(guest - 1);
  };

  const handlePlus = () => {
    // Set maximum booking number
    if (guest === 10) return;
    setGuest(guest + 1);
  };
  return (
    <div className="flex justify-center mt-7">
      <form onSubmit={submit} encType="multiple/form-data" className="s_form">
        <div className="s_input_wrapper pr-12 ">
          <label className="s_label">Location</label>
          <input
            className="s_input_placeholder"
            type="location"
            id="location"
            name="location"
            placeholder="Where are you going?"
          />
        </div>
        {/* checkin option */}
        <div className="s_input_wrapper">
          <label className="s_label">Check in</label>
          <input
            className="s_input_placeholder"
            type="date"
            id="checkin"
            name="checkin"
            placeholder="Add dates"
          />
        </div>
        {/* checkout option */}
        <div className="s_input_wrapper">
          <label className="s_label">Check out</label>
          <input
            className="s_input_placeholder"
            type="date"
            id="checkout"
            name="checkout"
            placeholder="Add dates"
          />
        </div>
        <div className="s_input_wrapper border-none w-32 ">
          <label className="s_label">Guest</label>
          {/* <input
            className="s_input_placeholder"
            type="guest"
            id="guest"
            name="guest"
            placeholder="Add guests"
          /> */}
          <div className="flex items-center text-gray-700">
            <FontAwesomeIcon
              icon={faMinusCircle}
              size="sm"
              onClick={handleMinus}
              className="cursor-pointer"
            />
            <div className="px-4 text-lg">{guest}</div>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="sm"
              onClick={handlePlus}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="s_btn">
          <FontAwesomeIcon icon={faSearch} size="sm" />
          {/* <input className="s_btn" type="submit" value="Add" /> */}
        </div>
      </form>
    </div>
  );
};

export default Search2;
