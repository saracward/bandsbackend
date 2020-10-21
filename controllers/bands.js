const Bands = require("../models/bands");
const { Router } = require("express");
const router = Router();
const seedData = require("../response.json");
const Artists = require("../models/artists");

router.post("/seed", async (req, res) => {
  res.json(await Bands.insertMany(seedData));
});

//index route
router.get("/", async (req, res) => {
  res.json(await Bands.find({}));
});

//create
router.post("/", async (req, res) => {
  res.json(await Bands.create(req.body));
});

//delete
router.delete("/:id", async (req, res) => {
  res.json(await Bands.findByIdAndRemove(req.params.id));
});

//update
router.put("/:id", async (req, res) => {
  res.json(
    await Bands.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

router.put("/:bandsId/addArtists/:artistsId", async (req, res) => {
  console.log("author route from put method update bands: ", req.params);
  const artists = await Artists.findById(req.params.artistsId);
  const bands = await Bands.findByIdAndUpdate(req.params.bandsId, {
    $push: { artists: artists.id },
    new: true,
  });
  res.json({
    status: 200,
    data: bands,
  });
});

module.exports = router;
