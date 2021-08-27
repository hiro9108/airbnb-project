import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
  query listHotelUserTables {
    listHotelUserTables {
      items {
        userId
        roomId
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateMutation($userId: String!) {
    createHotelUserTable(input: { userId: $userId }) {
      userId
    }
  }
`;

export const UPDATE_RESERVATION_DATA = gql`
  mutation Update_Mutation($userId: String!, $roomId: [String]) {
    updateHotelUserTable(input: { userId: $userId, roomId: $roomId }) {
      userId
      roomId
    }
  }
`;
