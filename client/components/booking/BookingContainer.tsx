import React, { useState } from "react";
import Button from "../UIkit/Button";

const BookingContainer = () => {
  // let date = new Date();
  // let year = date.getFullYear();
  // let month = date.getMonth() + 1;
  // let day = date.getDate();

  const [guest, setGuest] = useState(1);

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
    <div className="card_wrapper w-96 py-6">
      <article className="bg-white">
        <div className="flex justify-center">
          <p className="pb-6 font-bold">Booking</p>
        </div>
        <div className="flex flex-col border border-solid border-gray-500 rounded-lg mx-4">
          <div className="flex border-b border-solid border-gray-500">
            <div className="border-r border-solid border-gray-500 p-2">
              <label className="text-xs ">CHECK-IN</label>
              <input className="w-40" type="date" name="date" />
            </div>
            <div className="p-2">
              <label className="text-xs">CHECKOUT</label>
              <input className="w-40" type="date" name="date" />
            </div>
          </div>
          <div className="py-2 p-2">
            <label className="text-xs">GUESTS</label>
            <div className="flex justify-center">
              <img
                className="w-5"
                onClick={handleMinus}
                src="/minus-circle-solid.svg"
                alt="minus"
              />
              <div className="px-4 text-lg">{guest}</div>
              <img
                className="w-5"
                onClick={handlePlus}
                src="/plus-circle-solid.svg"
                alt="plus"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button button="SEND" />
        </div>
      </article>
    </div>
  );
};

export default BookingContainer;
