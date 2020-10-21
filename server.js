require("dotenv").config();
const cors = require("cors");
const corsOptions = require("./configs/cors");
const morgan = require("morgan");
const express = require("express");
const app = express();
const { PORT = 5000, NODE_ENV = "development" } = process.env;
const mongoose = require("./DB/conn");

// NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.json({ hello: "Hello World" });
});

const artistsRouter = require("./controllers/artists");
app.use("/artists/", artistsRouter);

const bandsRouter = require("./controllers/bands");
app.use("/bands/", bandsRouter);

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
