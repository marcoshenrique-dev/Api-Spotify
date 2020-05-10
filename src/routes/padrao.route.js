const express = require('express');
const router = express.Router();

const controller = require('../controllers/padrao.controller');

router.get('/status' , controller.get );

module.exports = router;