import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getToday, getTmr } from "../date_picker";

const BookingContainer = () => {
  const today = getToday();
  const tmr = getTmr();

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
    <div className="booking">
      <article className="bg-white">
        <div className="flex justify-center">
          <p className="pb-6 font-bold">Booking</p>
        </div>
        <form onClick={handleSubmit(onSubmit)}>
          <div className="flex flex-col border border-solid border-gray-500 rounded-lg mx-4">
            <div className="flex border-b border-solid border-gray-500">
              <div className="border-r border-solid border-gray-500 p-2">
                <label className="text-xs" htmlFor="checkin">
                  CHECK-IN
                </label>
                <input
                  {...register("checkin")}
                  className="w-32 md:w-20 lg:w-32 xl:w-40 text-sm"
                  id="checkin today"
                  type="date"
                  name="checkin"
                  defaultValue={today}
                />
              </div>
              <div className="p-2">
                <label className="text-xs" htmlFor="checkout">
                  CHECKOUT
                </label>
                <input
                  {...register("checkout")}
                  className="w-32 md:w-20 lg:w-32 xl:w-40 bg-white text-sm"
                  id="checkout"
                  type="date"
                  name="checkout"
                  defaultValue={tmr}
                />
              </div>
            </div>
            <div className="py-2 p-2">
              <label className="text-xs" htmlFor="guest">
                GUESTS
              </label>
              <div className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  size="sm"
                  onClick={handleMinus}
                  className="cursor-pointer"
                />
                <div className="px-4 text-lg" id="guest">
                  {guest}
                </div>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  size="sm"
                  onClick={handlePlus}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <input
              className="check_btn"
              type="submit"
              value="check availability"
            />
          </div>
        </form>
      </article>
    </div>
  );
};

export default BookingContainer;
