var configure = require('../configure/configure')
function dbConnector() {

}

dbConnector.prototype.getDbObject = function (callback) {
    var MongoClient = require('mongodb').MongoClient;
    var dbUrl = "mongodb://" + configure.hostName + ':' + configure.mongoPort + '/' + configure.dBName;
    console.log("URL " + dbUrl)
// Connect to the db
    MongoClient.connect(dbUrl, function (err, db) {
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
