import React from "react";
import RoomList from "../../components/room/room-list/RoomList";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/Navbar";

const RoomListPage = () => {
  const description =
    "An airbnb clone application. We made this to study new technologies such as GraphQL, Appllo Client, and AWS database.";
  const title = "Airbnb - List";

  return (
    <Layout description={description} title={title}>
      <Navbar classNameNavbar="navbar_list" classNameUser="navbar_user_list" />
      <RoomList />
    </Layout>
  );
};

export default RoomListPage;
