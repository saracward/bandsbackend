const Bands = require("../models/bands");
const { Router } = require("express");
const router = Router();

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

module.exports = router;
