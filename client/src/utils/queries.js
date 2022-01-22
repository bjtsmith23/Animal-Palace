import { gql } from "@apollo/client";

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
