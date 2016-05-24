var configure = require('../configure/configure')
function dbConnector() {

}

dbConnector.prototype.getDbObject = function (callback) {
    var MongoClient = require('mongodb').MongoClient;
    console.log("URL " + configure.url)
// Connect to the db
    MongoClient.connect(configure.url, function (err, db) {
        if (!err) {
            console.log("We are connected");
            callback(null, db);
        }
        else {
            callback(err, null);
            throw err;
            console.log(err)
        }
    });

};

module.exports = dbConnector;
