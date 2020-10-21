const { Schema, model } = require("mongoose");

//ARTIST SCHEMA
const artistsSchema = new Schema(
  {
    name: String,
    instrument: String,
  },
  { timestamps: true }
);

//ARTIST MODEL
const Artists = model("Artists", artistsSchema);

//EXPORT MODEL
module.exports = Artists;
