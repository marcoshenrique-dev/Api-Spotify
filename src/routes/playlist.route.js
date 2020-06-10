
const express = require("express");
var router = express.Router();

var controller = require("../controllers/playlist.controller");

router.get("/playlist" , controller.get);
router.post("/playlist" , controller.post);
router.put("/playlist" , controller.put);
router.delete("/playlist" , controller.delete);

module.exports = router;