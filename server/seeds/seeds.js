const db = require('../config/connection');
const { User, Animal } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  const users = await User.insertMany([
    {
      username: "Brian Smith",
      email: "brian@gmail.com",
      password: "password",
      totalDonations: 0
    }
  ]);

  console.log('users seeded');

  await Animal.deleteMany();

  const animals = await Animal.insertMany([
    {
      type: "Dog",
      name: "Spot",
      sex: "male",
      description: "Decription goes here",
      age: "3"

    },
    {
      type: "Cat",
      name: "Dizzy",
      sex: "female",
      description: "Decription goes here",
      age: "5"

    },
    {
      type: "Monkey",
      name: "Caesar",
      sex: "male",
      description: "Caesar was rescued from South Africa after his home was destroyed during deforestation by the local community.",
      age: "5"

    },
    {
      type: "Dog",
      name: "Spot",
      sex: "male",
      description: "Decription goes here",
      age: "3"

    }
  ]);

  console.log('animals seeded');

  process.exit();
});
