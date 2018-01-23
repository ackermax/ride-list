var express = require("express");
var ride = require("../models/ride.js");

var router = express.Router();

//create general get for homepage
router.get("/", function (req, res) {
    ride.all(function (data) {
        ride.all(function (data) {
            var hbsObject = {
                rides: data
            };
            res.render("index", hbsObject);
        });
    });
});

//POST for adding rides
router.post("/api/rides", function (req, res) {
    ride.create(req.body.name, function (data) {
        res.json({ id: data.id });
    });
});

//update rode status
router.put("/api/rides/:id", function (req, res) {
    var id = req.params.id;
    ride.update(id, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;