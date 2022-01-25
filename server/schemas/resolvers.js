const { AuthenticationError } = require("apollo-server-express");
const { User, Animal } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const resolvers = {
  Query: {
    animals: async () => {
      return await Animal.find({});
    },
    users: async () => {
      return await User.find({}).populate("adoptedAnimals");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate(
          "adoptedAnimals"
        );
        return user;
      }
    },
    checkout: async (parent, args, context) => {
      console.log("I am here");
      const url = new URL(context.headers.referer).origin;
      const initialDonation = args.initialDonation;
      console.log(`initialDonation=${initialDonation}`);
      const product = await stripe.products.create({
        name: "Donation",
        description: "One time donation",
      });
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: initialDonation * 100,
        currency: "usd",
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [{ price: price.id, quantity: 1 }],
        success_url: url,
        cancel_url: url,
      });
      console.log(session);
      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addUserAnimal: async (parent, { animalId }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { adoptedAnimals: { _id: animalId } },
          },
          {
            new: true,
          }
        ).populate("adoptedAnimals");
      }
    },
    addUserDonation: async (parent, { donation }, context) => {
      if (context.user) {
        // console.log(context.user);
        return await User.findByIdAndUpdate(
          context.user._id,
          {
            $inc: { totalDonations: donation },
          },
          {
            new: true,
          }
        ).populate("totalDonations");
      }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
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
