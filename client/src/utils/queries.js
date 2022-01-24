import { gql } from "@apollo/client";

// export const QUERY_USER = gql`
//   {
//     user(_id: $_id) {
//       firstName
//       lastName
//       email
//       totalDonations
//       adoptedAnimals {
//         name
//         description
//       }
//     }
//   }
// `;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      totalDonations
    }
  }
`;

export const QUERY_ALL_ANIMALS = gql`
  {
    animals {
      _id
      type
      name
      description
      image
      sex
      age
    }
  }
`;
