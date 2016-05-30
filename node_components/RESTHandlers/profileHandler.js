/**
 * Created by KiranSp on 5/18/16.
 */
var dbHandler = require("../../db_components/dbHandler");
function profileHandler() {

}

profileHandler.prototype.getProfile = function (callback) {
    var query = {};
    new dbHandler().getData('profiles', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

profileHandler.prototype.postProfile = function (query,callback) {
	new dbHandler().insertData('profiles', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

profileHandler.prototype.updateProfile = function (query,callback) {
	new dbHandler().updateData('profiles', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

profileHandler.prototype.deleteProfile = function (query,callback) {
	new dbHandler().deleteData('profiles', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

module.exports = profileHandler;
