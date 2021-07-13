import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search2 = () => {
  const submit = () => {};
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
            type="checkin"
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
            type="checkout"
            id="checkout"
            name="checkout"
            placeholder="Add dates"
          />
        </div>
        <div className="s_input_wrapper border-none">
          <label className="s_label">Guest</label>
          <input
            className="s_input_placeholder"
            type="guest"
            id="guest"
            name="guest"
            placeholder="Add guests"
          />
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
