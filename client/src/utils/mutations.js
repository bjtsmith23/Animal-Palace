import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER_ANIMAL = gql`
  mutation addUserAnimal($animalId: ID) {
    addUserAnimal(animalId: $animalId) {
      firstName
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

export const ADD_USER_DONATION = gql`
  mutation addUserDonation($donation: Int) {
    addUserDonation(donation: $donation) {
      firstName
      totalDonations
    }
  }
`;

export const ADD_USER_DONATION_FROM_SESSION = gql`
  mutation ($sessionId: String) {
    addUserDonationFromSession(sessionId: $sessionId) {
      firstName
      totalDonations
    }
  }
`;
