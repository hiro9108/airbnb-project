import React, { useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "../api/apollo";

const ApolloClientDemo = () => {
  useEffect(() => {
    client
      .query({
        query: gql`
          query listHotelTables {
            listHotelTables {
              items {
                id
                name
                subTitle
                reviewCount
                images
                address
                map
                room
                highLights
                additionalInfo
                description
                bedRoomInfo
                amenities
                rules
                healthInfo
                cancelPolicy
                reviews
                ownerId
              }
            }
          }
        `,
      })
      .then((result) => console.log(result.data.listHotelTables.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>ApolloClientDemo</h3>
    </div>
  );
};

export default ApolloClientDemo;
