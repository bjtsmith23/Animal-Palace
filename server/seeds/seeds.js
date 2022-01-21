const db = require("../config/connection");
const { User, Animal } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await Animal.deleteMany();

  const users = await User.create([
    {
      firstName: "Benjamin",
      lastName: "Bonfire",
      email: "benjamin@email.com",
      password: "password",
      totalDonations: 0,
    },
    {
      firstName: "Elizabeth",
      lastName: "Elevator",
      email: "elizabeth@email.com",
      password: "password",
      totalDonations: 0,
    },
    {
      firstName: "Tanya",
      lastName: "Transistor",
      email: "tanya@email.com",
      password: "password",
      totalDonations: 0,
    },
    {
      firstName: "Denise",
      lastName: "Diary",
      email: "denise@email.com",
      password: "password",
      totalDonations: 0,
    },
    {
      firstName: "Larry",
      lastName: "Lightning",
      email: "larry@email.com",
      password: "password",
      totalDonations: 0,
    },

  ]);

  console.log("users seeded");

  const animals = await Animal.insertMany([
    {
      type: "Dog",
      name: "Runner",
      sex: "M",
      description: "Found sitting at our front door with no identification.",
      age: 3,
    },
    {
      type: "Dog",
      name: "Taffy",
      sex: "M",
      description: "Very loving",
      age: 2,
    },
    {
      type: "Dog",
      name: "Dorothy",
      sex: "F",
      description: "Loves to play",
      age: 4,
    },
    {
      type: "Dog",
      name: "Wag",
      sex: "M",
      description: "Wag's owner unfortunately passed away.",
      age: 5,
    },
    {
      type: "Dog",
      name: "Candy",
      sex: "F",
      description: "Sweetest animal here.",
      age: 7,
    },
    {
      type: "Cat",
      name: "Dizzy",
      sex: "F",
      description: "Always chasing her tail.",
      age: 1,
    },
    {
      type: "Cat",
      name: "Topper",
      sex: "F",
      description: "Rescued from a telephone pole.",
      age: 2,
    },
    {
      type: "Cat",
      name: "Cauliflower",
      sex: "F",
      description: "Likes eating vegetables best.",
      age: 1,
    },
    {
      type: "Cat",
      name: "Nosy",
      sex: "F",
      description: "Mose curious pet here.",
      age: 5,
    },
    {
      type: "Cat",
      name: "Simpson",
      sex: "M",
      description: "Addicted to watching TV",
      age: 2,
    },
    {
      type: "Monkey",
      name: "Caesar",
      sex: "M",
      description:
        "Caesar was rescued from South Africa after his home was destroyed during deforestation by the local community.",
      age: 5,
    },
    {
      type: "Monkey",
      name: "Banana",
      sex: "F",
      description: "A very friendly pet who is happiest when peeling a banana.",
      age: 2,
    },
    {
      type: "Monkey",
      name: "Tenor",
      sex: "F",
      description: "Unable to keep quiet.",
      age: 2,
    },
    {
      type: "Bird",
      name: "Apollo",
      sex: "M",
      description:
        "Found trapped in a bush with a broken leg but is recuperating well.",
      age: 2,
    },
    {
      type: "Bird",
      name: "Feather",
      sex: "M",
      description:
        "This parrot lost its home owner moved to live with another family.",
      age: 2,
    },
    {
      type: "Tiger",
      name: "Lucky",
      sex: "M",
      description: "Found injured under farm machinery.",
      age: 2,
    },
    {
      type: "Rabbit",
      name: "Cotton",
      sex: "F",
      description:
        "Cotton was given to us after she was raised as a 4th grade pet.",
      age: 1,
    },
  ]);

  console.log("animals seeded");

  process.exit();
});
