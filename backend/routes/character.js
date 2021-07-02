var express = require("express");
var router = express.Router();

router.post("/character/:id/favourite", function(req, res) {
    res.send("<h1>Hello world 3</h1>");
});

router.delete("/character/:id/favourite", function(req, res) {
    res.send("<h1>Hello world 4</h1>");
});

router.get("/characters", function(req,res) {
    res.send("<h1>Hello world 5</h1>");
});

module.exports = router;