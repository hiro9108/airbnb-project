import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getToday, getTmr } from "../date_picker";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_ALL_USER,
  UPDATE_RESERVATION_DATA,
} from "../../pages/api/apollo-user-data";
import { roomProp } from "../../types";

const BookingContainer: React.FC<{ roomData?: roomProp }> = ({ roomData }) => {
  console.log("BookingContainer", roomData);
  const today = getToday();
  const tmr = getTmr();

  const [userData, setUserData] = useState(null);
  const [guest, setGuest] = useState(1);
  const [session, sessionLoading] = useSession();
  const router = useRouter();
  // const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const guestRef = useRef(null);

  console.log("session", session);

  const response = useQuery(GET_ALL_USER);

  console.log("response", response);

  const [updateRoomData, { data, loading, error }] = useMutation(
    UPDATE_RESERVATION_DATA
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ checkin, checkout }) => {
    if (!session) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to move to Login?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          signIn("cognito", {
            callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to make a reservation?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
      })
        .then((result) => {
          if (result.isConfirmed) {
            console.log(
              "confirm useQuery",
              response.data.listHotelUserTables.items
            );
            if (!response.data.listHotelUserTables.items) {
              updateRoomData({
                variables: {
                  userId: session.sub,
                  roomId: [
                    {
                      checkin,
                      checkout,
                      guest: guestRef.current.innerText,
                    },
                  ],
                },
              });
            } else {
              if (response.data.listHotelUserTables.items[0].roomId) {
                updateRoomData({
                  variables: {
                    userId: session.sub,
                    roomId: [
                      ...response.data.listHotelUserTables.items[0].roomId,
                      {
                        checkin,
                        checkout,
                        guest: guestRef.current.innerText,
                      },
                    ],
                  },
                });
              } else {
                updateRoomData({
                  variables: {
                    userId: session.sub,
                    roomId: [
                      {
                        checkin,
                        checkout,
                        guest: guestRef.current.innerText,
                      },
                    ],
                  },
                });
              }
            }
          }
        })
        .catch((err) => console.log("Cannot register", err));
    }
  };

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
                  <span ref={guestRef}>{guest}</span>
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
