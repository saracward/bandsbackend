const Artists = require("../models/artists");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Artists.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Artists.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(
    await Artists.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

//delete
router.delete("/:id", async (req, res) => {
  res.json(await Artists.findByIdAndRemove(req.params.id));
});

module.exports = router;
