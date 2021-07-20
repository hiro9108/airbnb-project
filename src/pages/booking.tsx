import React from "react";
import BookingContainer from "../components/booking/BookingContainer";
import Layout from "../components/layout";

const Booking = () => {
  const description = "";
  const title = "Airbnb - booking";
  return (
    <Layout description={description} title={title}>
      <div className="my-40">
        <BookingContainer />
      </div>
    </Layout>
  );
};

export default Booking;
