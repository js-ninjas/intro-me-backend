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
                    // console.log(data)
                    callback(null, data);
                }
            });

        }
    });
};

dbHandler.prototype.insertData = function (collectionName, query, callback) {

    new dbConnector().getDbObject(function (err, dbObj) {
        if (err) {
            console.log("error while connecting to DB");
            callback(err, null);
        }
        else {
            new crudOperator().insert(dbObj, collectionName, query, function (err, data) {
                if (err) {
                    callback(err, null);
                }
                else {
                    console.log("Inserted DATA CAME HERE")
                    // console.log(data)
                    callback(null, data);
                }
            });

        }
    });

};

dbHandler.prototype.updateData = function (collectionName, query, callback) {
    
    new dbConnector().getDbObject(function (err, dbObj) {
        if (err) {
            console.log("error while connecting to DB");
            callback(err, null);
        }
        else {
            new crudOperator().update(dbObj, collectionName, query, function (err, data) {
                if (err) {
                    callback(err, null);
                }
                else {
                    console.log("Data gets updated")
                    // console.log(data)
                    callback(null, data);
                }
            });

        }
    });

};

dbHandler.prototype.deleteData = function (collectionName, query, callback) {

    new dbConnector().getDbObject(function (err, dbObj) {
        if (err) {
            console.log("error while connecting to DB");
            callback(err, null);
        }
        else {
            new crudOperator().delete(dbObj, collectionName, query, function (err, data) {
                if (err) {
                    callback(err, null);
                }
                else {
                     console.log("data gets deleted ")
                    // console.log(data)
                    callback(null, data);
                }
            });

        }
    });
};

module.exports = dbHandler;
