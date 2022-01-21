const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    totalDonations: Int
  }

  type Animal {
    _id: ID
    type: String
    name: String
    description: String
    image: String
    sex: String
    age: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    animals: [Animal]
    users: [User]
    userId: 
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
