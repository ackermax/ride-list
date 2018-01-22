var connection = require("./connection.js");

var orm = {
    selectAll: function (select, table, cb) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [select, table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(queryString, [table, col, val], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, col, val, cb) {
        var queryString = ("DELETE FROM ?? WHERE ?? = ?");
        connection.query(queryString, [table, col, val], function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;