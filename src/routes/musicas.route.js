
const express = require("express");
var router = express.Router();

var controller = require("../controllers/musicas.controller");

router.get("/musicas" , controller.get);
router.post("/musicas" , controller.post);
router.put("/musicas" , controller.put);

module.exports = router;