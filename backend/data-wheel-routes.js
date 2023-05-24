const router = require("express").Router();
let WheelData = require("./data-wheel-model.js");

router.route("/").get((req, res) => {
  WheelData.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
