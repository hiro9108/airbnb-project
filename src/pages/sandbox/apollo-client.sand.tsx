import React, { useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "../api/apollo";

const ApolloClientDemo = () => {
  useEffect(() => {
    client
      .query({
        query: gql`
          query list {
            listMyCustomTypes {
              items {
                id
                title
                content
              }
            }
          }
        `,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>ApolloClientDemo</h3>
    </div>
  );
};

export default ApolloClientDemo;
