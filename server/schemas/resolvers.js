const { AuthenticationError } = require("apollo-server-express");
const { Animal, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    animals: async () => {
      return await Animal.find({}).populate("");
    },
  },
  Mutation: {
    addUser: async ({ fullName, email, password, totalDonations }) => {
      return await User.create({ fullName, email, password, totalDonations });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
