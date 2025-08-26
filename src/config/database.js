const mongoose = require("mongoose");

//mongoose.connect returns a promise.So ->
const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION_SECRET);
};

module.exports = connectDB; // Export the function
