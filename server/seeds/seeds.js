const db = require("../config/connection");
const { User, Animal } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  const users = await User.insertMany([
    {
      firstName: "Benjamin",
      lastName: "Bonfire",
      email: "Benjamin.email.com",
      password: "password",
      totalDonations: 0,
    },

  ]);

  console.log("users seeded");

  await Animal.deleteMany();

  const animals = await Animal.insertMany([
    {
      type: "Dog",
      name: "Runner",
      sex: "male",
      description: "Found sitting at our front door with no identification.",
      age: 3,
    },
    {
      type: "Dog",
      name: "Taffy",
      sex: "male",
      description: "Very loving",
      age: 2,
    },
    {
      type: "Dog",
      name: "Dorothy",
      sex: "female",
      description: "Loves to play",
      age: 4,
    },
    {
      type: "Dog",
      name: "Wag",
      sex: "male",
      description: "Wag's owner unfortunately passed away.",
      age: 5,
    },
    {
      type: "Dog",
      name: "Candy",
      sex: "female",
      description: "Sweetest animal here.",
      age: 7,
    },
    {
      type: "Cat",
      name: "Dizzy",
      sex: "female",
      description: "Always chasing her tail.",
      age: 1,
    },
    {
      type: "Cat",
      name: "Topper",
      sex: "female",
      description: "Rescued from a telephone pole.",
      age: 2,
    },
    {
      type: "Cat",
      name: "Cauliflower",
      sex: "female",
      description: "Likes eating vegetables best.",
      age: 1,
    },
    {
      type: "Cat",
      name: "Nosy",
      sex: "female",
      description: "Mose curious pet here.",
      age: 5,
    },
    {
      type: "Cat",
      name: "Simpson",
      sex: "male",
      description: "Addicted to watching TV",
      age: 2,
    },
    {
      type: "Monkey",
      name: "Caesar",
      sex: "male",
      description:
        "Caesar was rescued from South Africa after his home was destroyed during deforestation by the local community.",
      age: 5,
    },
    {
      type: "Monkey",
      name: "Banana",
      sex: "female",
      description:
        "A very friendly pet who is happiest when peeling a banana.",
      age: 2,
    },
    {
      type: "Monkey",
      name: "Tenor",
      sex: "female",
      description:
        "Unable to keep quiet.",
      age: 2,
    },
    {
      type: "Bird",
      name: "Apollo",
      sex: "male",
      description:
        "Found trapped in a bush with a broken leg but is recuperating well.",
      age: 2,
    },
    {
      type: "Bird",
      name: "Feather",
      sex: "male",
      description:
        "This parrot lost its home owner moved to live with another family.",
      age: 2,
    },
    {
      type: "Rabbit",
      name: "Lucky",
      sex: "male",
      description:
        "Found injured under farm machinery.",
      age: 2,
    },
    {
      type: "Rabbit",
      name: "Cotton",
      sex: "female",
      description:
        "Cotton was given to us after she was raised as a 4th grade pet.",
      age: 1,
    },
  ]);

  console.log("animals seeded");

  process.exit();
});
