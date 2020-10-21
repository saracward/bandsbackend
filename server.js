require("dotenv").config();
const { PORT = 4000, NODE_ENV = "development" } = process.env;

//MONGO CONNECTION
const mongoose = require("./DB/conn");

//CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

//Bringing in Express
const express = require("express");
const app = express();

//OTHER IMPORTS
const morgan = require("morgan");
const artistsRouter = require("./controllers/artists");
const bandsRouter = require("./controllers/bands");
////////////
//MIDDLEWARE
////////////
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////

//Route for testing server is working
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

// aritst Route send to artist router
app.use("/artists", artistsRouter);
app.use("/bands", bandsRouter);

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
