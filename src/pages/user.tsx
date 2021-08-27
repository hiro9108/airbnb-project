import React from "react";
import Layout from "../components/layout";
import Signup from "../components/user/Signup";
import Signin from "../components/user/Signin";

const user = () => {
  const description =
    "An airbnb clone application. We made this to study new technologies such as GraphQL, Appllo Client, and AWS database.";
  const title = "Airbnb - Sign up";

  return (
    <Layout description={description} title={title}>
      <Signin />
      {/* <Signup /> */}
    </Layout>
  );
};

export default user;
