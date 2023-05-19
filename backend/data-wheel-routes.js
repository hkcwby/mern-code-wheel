const router = require("express").Router();
let dataWheel = require("./data-wheel-model.js");

router.route("/").get((req, res) => {
  dataWheel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
