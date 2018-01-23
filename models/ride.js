var orm = require("../config/orm.js");

var ride = {
    all: function (cb) {
        orm.selectAll("*", "rides", function (res){
            cb(res);
        });
    },
    create: function(val, cb) {
        orm.insertOne("rides", "ride_name", val, function(res) {
            cb(res);
        });
    },
    update: function(val, cb) {
        orm.updateOne("rides", "rode", "id", val, function(res){
            cb(res);
        });
    }
};

module.exports = ride;