import React from "react";
import Layout from "../components/layout";
import Signup from "../components/user/Signup";
import Signin from "../components/user/Signin";

const user = () => {
  const description = "";
  const title = "Airbnb - sign up";

  return (
    <Layout description={description} title={title}>
      <Signin />
      {/* <Signup /> */}
    </Layout>
  );
};

export default user;
