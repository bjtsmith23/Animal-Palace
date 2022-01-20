const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    fullName: String!
    email: String!
    password: String!
    totalDonations: Int
  }

  type Animal {
    _id: ID
    type: String!
    name: String!
    sex: String!
    description: String!
    age: Int!
  }

  type Query {
    user: [User]
    animals: [Animal]
  }

  type Mutation {
    addUser(fullName: String!, email: String!, password: String!, totalDonations: Int): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
