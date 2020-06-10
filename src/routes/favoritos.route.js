
const express = require("express");
var router = express.Router();

var controller = require("../controllers/favoritos.controller");

router.get("/favoritos" , controller.get);
router.post("/favoritos" , controller.post);
router.put("/favoritos" , controller.put);
router.delete("/favoritos" , controller.delete);

module.exports = router;