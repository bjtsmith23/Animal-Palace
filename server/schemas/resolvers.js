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
      console.log("this is context user!!", context.user);
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
      console.log(`initialDonation=${initialDonation}`);
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
      throw new AuthenticationError("Must be logged in!!");
    },
    deleteUserAnimal: async (parent, { animalId }, context) => {
      console.log("inside delete user animal");
      if (context.user) {
        console.log(animalId);
        console.log("this is user!", context.user);
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { adoptedAnimals: { _id: animalId } }
          },
          function(err, result) {
            if (err) {
              console.log("This is error!!!", err);
            }
            else {
              console.log("This is a result", result);
            }
            
          }
        );
      }
      throw new AuthenticationError("Must be logged in!!");
    },
    addUserDonationFromSession: async (parent, args, context) => {
      console.log(context.user);
      console.log(args);
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
        // console.log(context.user);
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
