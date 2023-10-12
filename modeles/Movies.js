const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
//gender
  rate: Number,
  link: String 
  
  
});

module.exports = mongoose.model("movies", movieSchema);