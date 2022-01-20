const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    fullName: String!
    email: String!
    password: String!
    totalDonations: Number
  }

  type Animal {
    _id: ID
  }
`;

module.exports = typeDefs;