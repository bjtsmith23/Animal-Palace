import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      totalDonations
      adoptedAnimals {
        _id
        type
        name
        description
        image
        sex
        age
        favoriteFood
      }
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
      favoriteFood
    }
  }
`;
