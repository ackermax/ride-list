var orm = require("../config/orm.js");

var ride = {
    all: function (cb) {
        orm.selectAll("*", "rides", function (res){
            cb(res);
        });
    },
    create: function(col, val, cb) {
        orm.insertOne("rides", val, function(res) {
            cb(res);
        });
    },
    delete: function(col, val, cb) {
        orm.updateOne("rides", col, val, function(res){
            cb(res);
        });
    }
};

module.exports = ride;