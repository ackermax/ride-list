var connection = require("./connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, colSet, colId, val, cb) {
        var queryString = "UPDATE ?? SET ?? = TRUE WHERE ?? = ?";
        connection.query(queryString, [table, colSet, colId, val], function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;