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
        }
        else {
            console.log("Found the following records");
            //console.log(result);
            callback(null, result);
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
    collectionObj.insert(query,function (err, result) {
        if (err) {
            console.log("error in crudOperation- insert()");
            console.log(err);
            callback(err, null);
        }
        else {
            console.log("Found the following records");
            //console.log(result);
            callback(null, result);
        }

    });
    //dbObj.close();
};

crudOperator.prototype.update = function (dbObj, collectionName, query, callback) {
    var collectionObj = dbObj.collection(collectionName);
    if (query == null) {
        query = {}
    }
    console.log("CollectionName " + collectionName);
    collectionObj.update(query,function (err, result) {
        if (err) {
            console.log("error in crudOperation- update()");
            console.log(err);
            callback(err, null);
        }
        else {
            console.log("Found the following records");
            //console.log(result);
            callback(null, result);
        }

    });
    //dbObj.close();
};

crudOperator.prototype.delete = function (dbObj, collectionName, query, callback) {
    var collectionObj = dbObj.collection(collectionName);
    if (query == null) {
        query = {}
    }
    console.log("CollectionName " + collectionName);
    collectionObj.delete(query,function (err, result) {
        if (err) {
            console.log("error in crudOperation- delete()");
            console.log(err);
            callback(err, null);
        }
        else {
            console.log("Found the following records");
            //console.log(result);
            callback(null, result);
        }

    });
    //dbObj.close();
};

module.exports = crudOperator;
