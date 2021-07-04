var express = require("express");
var router = express.Router();

var authentication = require("../utilities/authentication");

var userController = require("../controllers/user");

router.get("/user", authentication.validateToken, userController.get);
router.post("/user", userController.create);
router.post("/user/login", userController.login);

module.exports = router;