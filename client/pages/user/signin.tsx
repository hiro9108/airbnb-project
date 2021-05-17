import React from "react";
import Layout from "../../components/layout";
import Signin from "../../components/user/Signin";

const user = () => {
  const description = "";
  const title = "Airbnb - sign in";

  return (
    <Layout description={description} title={title}>
      <Signin />
    </Layout>
  );
};

export default user;
