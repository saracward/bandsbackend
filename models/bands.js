const { Schema, model } = require("mongoose");

//ARTIST SCHEMA
const bandsSchema = new Schema(
  {
    name: String,
    genre: String,
    img: String,
  },
  { timestamps: true }
);

//ARTIST MODEL
const Bands = model("Bands", bandsSchema);

//EXPORT MODEL
module.exports = Bands;
