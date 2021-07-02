var express = require("express");
var router = express.Router();

var authentication = require("../utilities/authentication");

var favouriteController = require("../controllers/favourites");
var characterController = require("../controllers/characters");

router.post("/character/:id/favourite", authentication.validateToken, favouriteController.create);
router.delete("/character/favourite/:id", authentication.validateToken, favouriteController.remove);
router.get("/characters", authentication.validateToken, characterController.getCharacters);

module.exports = router;