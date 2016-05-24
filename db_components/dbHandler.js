var dbConnector = require("./dbConnector");
var crudOperator = require("./crudOperator");
function dbHandler() {

}

dbHandler.prototype.getData = function (collectionName, query, callback) {
    new dbConnector().getDbObject(function (err, dbObj) {
        if (err) {
            console.log("error while connecting to DB");
            callback(err, null);
        }
        else {
            new crudOperator().find(dbObj, collectionName, query, function (err, data) {
                if (err) {
                    callback(err, null);
                }
                else {
                    console.log("DATA CAME HERE")
                    console.log(data)
                    callback(null, data);
                }
            });

        }
    });
};

dbHandler.prototype.insertData = function () {

};

dbHandler.prototype.updateData = function () {

};

dbHandler.prototype.deleteData = function () {

};

module.exports = dbHandler;
