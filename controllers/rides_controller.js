var express = require("express");
var ride = require("../models/ride.js");

var router = express.Router();

router.get("/", function(req, res){
    ride.all(function(data){

    });
});

module.exports = router;