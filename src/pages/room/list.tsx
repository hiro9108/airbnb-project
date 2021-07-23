import React from "react";
import RoomList from "../../components/room/room-list/RoomList";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar/Navbar";

const RoomListPage = () => {
  const description = "";
  const title = "";

  return (
    <Layout description={description} title={title}>
      <Navbar classNameNavbar="navbar_list" classNameUser="navbar_user_list" />
      <RoomList />
    </Layout>
  );
};

export default RoomListPage;
