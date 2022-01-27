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
      const url = new URL(context.headers.referer).origin;
      const initialDonation = args.initialDonation;

      const product = await stripe.products.create({
        name: "Donation",
        description: "One-time donation",
      });
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: initialDonation * 100,
        currency: "usd",
      });

      const session = await stripe.checkout.sessions.create({
        submit_type: "donate",
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [{ price: price.id, quantity: 1 }],
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/main`,
      });

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
      throw new AuthenticationError("Must be logged in!!");
    },
    // deleteUserAnimal: async (parent, { animalId }, context) => {
    //   if (context.user) {
    //     return await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       {
    //         $pull: { adoptedAnimals: { $eq: animalId } },
    //       },
    //       {
    //         new: true,
    //       }
    //     ).populate("adoptedAnimals");
    //   }
    //   throw new AuthenticationError("Must be logged in!!");
    // },
    deleteUserAnimal: async (parent, args, context) => {
      // console.log(animalId);
      console.log(args);
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { adoptedAnimals: { $in: args.animalId } },
          },
          {
            new: true,
          }
        ).populate("adoptedAnimals");
      }

      throw new AuthenticationError("Must be logged in!!");
    },
    addUserDonationFromSession: async (parent, args, context) => {
      if (context.user) {
        const session = await stripe.checkout.sessions.retrieve(args.sessionId);
        const donationAmount = session.amount_total / 100;
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $inc: { totalDonations: donationAmount },
          },
          {
            new: true,
          }
        );
      }
    },
    addUserDonation: async (parent, { donation }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $inc: { totalDonations: donation },
          },
          {
            new: true,
          }
        );
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
