var configure=require('../configure/configure')
function dbConnector() {

}

dbConnector.prototype.connectToDb = function () {
    var MongoClient = require('mongodb').MongoClient;

// Connect to the db
    MongoClient.connect(configure.url, function (err, db) {
        if (!err) {
            console.log("We are connected");
            /*var collection = db.collection('emp');
            collection.insert({'name': 'kiran', 'comp': 'tcs'},function(err,data){
                console.log("insertred")
                console.log(data)
                collection.find({}).toArray(function(err, docs) {

                    console.log("Found the following records");
                    console.log(docs);
                    collection.updateMany({'name':'kiran'},{$set:{'comp':'XYZ'}},function(err,data){
                        if(err) throw err

                        console.log("ROews "+data)
                        collection.find({}).toArray(function(err,data){
                            console.log("Found the following records");
                            console.log(docs);
                        })
                        db.close();
                    })

                });

            });*/
        }
        else {

            console.log(err)
        }
    });

};
