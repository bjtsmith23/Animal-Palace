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
      totalDonations: 25,
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
      totalDonations: 75,
    },
    {
      firstName: "Denise",
      lastName: "Diary",
      email: "denise@email.com",
      password: "password",
      totalDonations: 100,
    },
    {
      firstName: "Larry",
      lastName: "Lightning",
      email: "larry@email.com",
      password: "password",
      totalDonations: 0,
    },
    {
      firstName: "Betty",
      lastName: "Chen",
      email: "bettychen@gmail.com",
      password: "password",
      totalDonations: 500,
    },
    {
      firstName: "Ken",
      lastName: "Crawford",
      email: "kencrawford@gmail.com",
      password: "password",
      totalDonations: 0,
    },
    {
      firstName: "Brian",
      lastName: "Smith",
      email: "briansmith@gmail.com",
      password: "password",
      totalDonations: 50,
    },
    {
      firstName: "Marc",
      lastName: "Negron",
      email: "marcnegron@gmail.com",
      password: "password",
      totalDonations: 35,
    },
    {
      firstName: "Qi",
      lastName: "Zhang",
      email: "qizhang@gmail.com",
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
      description:
        "Runner was found at our front entrance one morning. There was no tag or chip identification but is most appreciative of our attention.",
      favoriteFood: "Pancakes and sausage",
      age: 3,
      image: "dogrunner.jpg",
    },
    {
      type: "Dog",
      name: "Taffy",
      sex: "M",
      description:
        "Every time we pass by her cage, her tale is wagging always hoping for attention. She gets even more excited when allowed to run freely.",
      favoriteFood: "Purina",
      age: 2,
      image: "dogtaffy.jpg",
    },
    {
      type: "Dog",
      name: "Dorothy",
      sex: "F",
      description:
        "Every time she sees a ball, she becomes quite excited when playing. After retrieving the thrown ball, she expects us to chase her before returning it.",
      favoriteFood: "Any brand of dog food",
      age: 4,
      image: "dogdorothy.jpg",
    },
    {
      type: "Dog",
      name: "Wag",
      sex: "M",
      description:
        "Wag has been a bit depressed since losing his owner. However, he loves to cuddle quietly.",
      favoriteFood: "Cheese sandwich",
      age: 5,
      image: "dogwag.jpg",
    },
    {
      type: "Dog",
      name: "Candy",
      sex: "F",
      description:
        "Everyone who sees Candy loves her immediately. Her eyes makes all of us melt.",
      favoriteFood: "Beans",
      age: 7,
      image: "dogcandy.jpg",
    },
    {
      type: "Cat",
      name: "Dizzy",
      sex: "F",
      description:
        "Always running and jumping. It is impossible for her to remain still. Often whe will chase her tail for long periods. She should have been named Merry Go Round.",
      favoriteFood: "Fish",
      age: 1,
      image: "catdizzy.jpg",
    },
    {
      type: "Cat",
      name: "Topper",
      sex: "M",
      description:
        "Reported by a concerned citizen, Topper was found at the top of a telephone pole. He started purring immediately when the fireman rescued him.",
      favoriteFood: "Chicken tenders",
      age: 2,
      image: "cattopper.jpg",
    },
    {
      type: "Cat",
      name: "Cauliflower",
      sex: "F",
      description:
        "Cauliflower pretends to ignore all all of us for a few minutes. Then when we aren't looking he rubs hinself against one of us.",
      favoriteFood: "Table scraps",
      age: 1,
      image: "catcauliflower.jpg",
    },
    {
      type: "Cat",
      name: "Nosy",
      sex: "F",
      description:
        "Anytime anything new is added inside her cage, she examines it endlessly. She is still alive even though she is the most curious animal here.",
      favoriteFood: "Most cat foods",
      age: 5,
      image: "catnosy.jpg",
    },
    {
      type: "Cat",
      name: "Simpson",
      sex: "M",
      description:
        "When ever the TV set is on he will watch it endlessly. Sometimes he will even ignore his food when Simpsons is on.",
      favoriteFood: "Tuna fish",
      age: 2,
      image: "catsimpson.jpg",
    },
    {
      type: "Monkey",
      name: "Caesar",
      sex: "M",
      description:
        "Caesar was rescued from South Africa after his home was destroyed during deforestation by the local community.",
      favoriteFood: "Oatmeal and banana",
      age: 5,
      image: "monkeycaesar.jpg",
    },
    {
      type: "Monkey",
      name: "Banana",
      sex: "F",
      description:
        "Banana will sometimes make the strangest faces when somebody new walks by. And when he is given a banana, he screaches in ecstasy.",
      favoriteFood: "Cat food and banana",
      age: 2,
      image: "monkeybanana.jpg",
    },
    {
      type: "Monkey",
      name: "Tenor",
      sex: "F",
      description:
        "Tenor will always return a screech from Banana - but it always has to be louder and longer. She also loves mimic faces and gestures made by any passerby.",
      favoriteFood: "Most vegetables",
      age: 2,
      image: "monkeytenor.jpg",
    },
    {
      type: "Bird",
      name: "Apollo",
      sex: "M",
      description:
        "Apollo was found trapped in a bush with a broken leg. He resisted when rescued but eventually calmed down during treatment and is starting to enjoy our attention.",
      favoriteFood: "Sun flower seeds",
      age: 2,
      image: "birdapollo.jpg",
    },
    {
      type: "Bird",
      name: "Feather",
      sex: "M",
      description:
        "This parrot lost its home when his owner was forced to move to live with another pet-free family. He is slowly getting more responsive to others.",
      favoriteFood: "Uncooked corn and seed mix",
      age: 2,
      image: "birdfeather.jpg",
    },
    {
      type: "Tiger",
      name: "Lucky",
      sex: "M",
      description:
        "Lucky was rescued from an illegal smuggling ring. He is still a wild animal but all of our staff seem to adore him the most.",
      favoriteFood: "Special diet beef with occasional mouse",
      age: 2,
      image: "tigerlucky.jpg",
    },
    {
      type: "Rabbit",
      name: "Cotton",
      sex: "F",
      description:
        "Cotton was given to us after she was raised as a 4th grade pet but no family volunteered to take care of her over the summer. She is anything but shy and loves all the attention she can get.",
      favoriteFood: "All kinds of vegetable leaves",
      age: 1,
      image: "rabbitcotton.jpg",
    },
  ]);

  for (newUser of users) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    newUser.adoptedAnimals.push(animals[randomIndex]._id);
    await newUser.save();
  }
  console.log("animals seeded");

  process.exit();
});
