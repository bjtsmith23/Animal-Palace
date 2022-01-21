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
    animals: Animal
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// products(category: ID, name: String): [Product]
// product(_id: ID!): Product
// order(_id: ID!): Order
// checkout(products: [ID]!): Checkout

// addOrder(products: [ID]!): Order
// updateProduct(_id: ID!, quantity: Int!): Product

// type Category {
//   _id: ID
//   name: String
// }

// type Product {
//   _id: ID
//   name: String
//   description: String
//   image: String
//   quantity: Int
//   price: Float
//   category: Category
// }

// type User {
//   _id: ID
//   firstName: String
//   lastName: String
//   email: String
//   orders: [Order]
// }


// type Order {
//   _id: ID
//   purchaseDate: String
//   products: [Product]
// }

// type Checkout {
//   session: ID
// }