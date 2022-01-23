const mongoose = require("mongoose");

const { Schema } = mongoose;

const animalSchema = new Schema({
  type: {
    type: String,
    required: true,
  }, 
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  sex: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteFood: {
    type: String,
  }, 
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
