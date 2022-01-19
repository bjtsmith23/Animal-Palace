const mongoose = require("mongoose");

const { Schema } = mongoose;

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;