const router = require("express").Router();
const rok = require("./rok_modal");

router.get("/commander", async (req, res) => {
  const name = req.query.name.replace("+", " ").toUpperCase();
  const build = req.query.build.toUpperCase();
  const commander = await rok.getCommander(name, build);
  res.status(200).json(commander);
});
router.get("/city", async (req, res) => {
  const { level } = req.query;
  const city = await rok.getCity(level);
  res.status(200).json(city);
});
router.get("/castle", async (req, res) => {
  const { level } = req.query;
  const castle = await rok.getCastle(level);
  res.status(200).json(castle);
});

module.exports = router;
