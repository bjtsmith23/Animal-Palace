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
  sex: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;