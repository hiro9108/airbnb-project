import React, { useState } from "react";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import searchIcon from "../../../../public/search-solid.svg";
import "font-awesome/css/font-awesome.min.css";

import { useForm } from "react-hook-form";

const Search2 = () => {
  const [guest, setGuest] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
    <div className="hidden md:flex justify-center mt-7 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multiple/form-data"
        className="s_form"
      >
        <div className="s_input_wrapper pr-12 ">
          <label className="s_label">Location</label>
          <input
            {...register("location")}
            className="s_input_placeholder"
            type="text"
            id="location"
            name="location"
            placeholder="Where are you going?"
          />
        </div>
        {/* checkin option */}
        <div className="s_input_wrapper">
          <label className="s_label">Check in</label>
          <input
            {...register("checkin")}
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
            {...register("checkout")}
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
          <div className="flex items-center text-gray-500">
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
        <div>
          <input type="submit" value="&#xF002;" className="submit_btn" />
        </div>
      </form>
    </div>
  );
};

export default Search2;
