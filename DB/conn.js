require("dotenv").config();
const { MONGODB_URI } = process.env;
console.log("this is mongodburi", MONGODB_URI);
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, config);

db.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;
