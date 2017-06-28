var express = require("express");

var speciesController = require("../controllers/speciesController");

var router = new express.Router();

router.get("/lifesearch", speciesController.lifesearch);

module.exports = router;
