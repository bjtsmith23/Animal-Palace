import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      animals {
        _id
        species
        breed
        name
        description
        image
        sex
        age
      }
    }
  }
`;

