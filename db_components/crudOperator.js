function crudOperator() {

}

crudOperator.prototype.find = function (dbObj, collectionName, query, callback) {
    var collectionObj = dbObj.collection(collectionName);
    if (query == null) {
        query = {}
    }
    console.log("CollectionName " + collectionName);
    collectionObj.find({}).toArray(function (err, result) {
        if (err) {
            console.log("error in crudOperation- find()");
            console.log(err);
            callback(err, null);
            dbObj.close();
        }
        else {
            console.log("Selecting the following records");
            //console.log(result);
            callback(null, result);
            dbObj.close();
        }

    });
    //dbObj.close();
};

crudOperator.prototype.insert = function (dbObj, collectionName, query, callback) {
    var collectionObj = dbObj.collection(collectionName);
    if (query == null) {
        query = {}
    }
    console.log("CollectionName " + collectionName);
    // console.log("Ister Data");
    // console.log(query['postData']);

    collectionObj.insert(query['postData'],function (err, result) {
        if (err) {
            console.log("error in crudOperation- insert()");
            console.log(err);
            callback(err, null);
            dbObj.close();
        }
        else {
            console.log("Inserting records");
            //console.log(result);
            callback(null, result);
            dbObj.close();
        }

    });
    //dbObj.close();
};

crudOperator.prototype.update = function (dbObj, collectionName, query, callback) {
    // console.log("DATATTATAT dbHandler");
    //     console.log(query['postData']);

    var collectionObj = dbObj.collection(collectionName);
    if (query == null) {
        query = {}
    }
    console.log("CollectionName " + collectionName);
    collectionObj.update(query['query'],{$set:query['postData']},function (err, result) {
        if (err) {
            console.log("error in crudOperation- update()");
            console.log(err);
            callback(err, null);
            dbObj.close();
        }
        else {
            console.log("Updating records");
            //console.log(result);
            callback(null, result);
            dbObj.close();
        }

    });
    //dbObj.close();
};

crudOperator.prototype.delete = function (dbObj, collectionName, query, callback) {
    var collectionObj = dbObj.collection(collectionName);
    if (query == null) {
        query = {}
    }
    // console.log("what to delete");
    // console.log(query['postData']);
    console.log("CollectionName " + collectionName);
     console.log(query);

    collectionObj.remove(query['query'],function (err, result) {
        if (err) {
            console.log("error in crudOperation- delete()");    
            console.log(err);
            callback(err, null);
            dbObj.close();
        }
        else {
            console.log("Deleting records");
            // console.log(result);
            callback(null, result);
            dbObj.close();
        }

    });
    //dbObj.close();
};

module.exports = crudOperator;
