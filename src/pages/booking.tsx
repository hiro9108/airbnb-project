import React from "react";
import BookingContainer from "../components/booking/BookingContainer";
import Layout from "../components/layout";

const Booking = () => {
  const description =
    "An airbnb clone application. We made this to study new technologies such as GraphQL, Appllo Client, and AWS database.";
  const title = "Airbnb - Booking";
  return (
    <Layout description={description} title={title}>
      <div className="my-40">
        <BookingContainer />
      </div>
    </Layout>
  );
};

export default Booking;
