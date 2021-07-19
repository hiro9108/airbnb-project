import React from "react";
import BookingContainer from "../components/room/booking/BookingContainer";
import Layout from "../components/layout";

const Booking = () => {
  const description = "";
  const title = "Airbnb - booking";
  return (
    <Layout description={description} title={title}>
      <BookingContainer />
    </Layout>
  );
};

export default Booking;
