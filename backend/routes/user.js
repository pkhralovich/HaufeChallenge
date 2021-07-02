var express = require("express");
var router = express.Router();

var userController = require("../controllers/user");

router.post("/user", userController.create);
router.post("/user/login", userController.login);

module.exports = router;