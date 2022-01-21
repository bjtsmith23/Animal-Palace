const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Animal {
  _id: ID
  name: String
  description: String
  image: String
  sex: String
  age: Int
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  password: String
  totalDonations: Int
  adoptedAnimals: [Schema.Types.ObjectId]
}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}

type Query {
  categories: [Category]
  products(category: ID, name: String): [Product]
  (_id: ID!): 
  user: User
  checkout(animals: [ID]!): Checkout
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  addOrder(products: [ID]!): Order
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  updateProduct(_id: ID!, quantity: Int!): Product
  login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;


