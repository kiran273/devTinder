const mongoose = require("mongoose");

//mongoose.connect returns a promise.So ->
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://gkkumar7416:tW4EBASM3qD5R1ep@namaste-node.gbenrri.mongodb.net/devTinder"
  );
};

module.exports = connectDB; // Export the function
