import { gql } from "@apollo/client";

export const GET_ALL_CITIES = gql`
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
`;
