import React from "react";
import Layout from "../../components/layout";
import Signup from "../../components/user/Signup";

const user = () => {
  const description = "";
  const title = "Airbnb - sign up";

  return (
    <Layout description={description} title={title}>
      <Signup />
    </Layout>
  );
};

export default user;
