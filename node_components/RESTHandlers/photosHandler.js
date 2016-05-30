/**
 * Created by KiranSp on 5/18/16.
 */
var dbHandler = require("../../db_components/dbHandler");
function photosHandler() {

}

photosHandler.prototype.getPhoto = function (callback) {
    var query = {};
    new dbHandler().getData('photos', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

photosHandler.prototype.postPhoto = function (query,callback) {
	new dbHandler().insertData('photos', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

photosHandler.prototype.updatePhoto = function (query,callback) {
	new dbHandler().updateData('photos', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

photosHandler.prototype.deletePhoto = function (query,callback) {
	new dbHandler().deleteData('photos', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

module.exports = photosHandler;
