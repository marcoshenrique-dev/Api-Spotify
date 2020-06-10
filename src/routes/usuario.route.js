
const express = require("express");
var router = express.Router();

var controller = require("../controllers/usuario.controller");

router.get("/usuarios" , controller.get);
router.post("/usuarios" , controller.post);
router.put("/usuarios" , controller.put);

module.exports = router;