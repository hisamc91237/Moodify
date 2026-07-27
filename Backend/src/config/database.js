const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database is connnected");
    })
    .catch((err) => {
      console.log("Error connecting to DB", err);
    });
};

module.exports = connectToDB;
