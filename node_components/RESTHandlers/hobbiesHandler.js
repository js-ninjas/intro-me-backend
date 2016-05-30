var dbHandler = require("../../db_components/dbHandler");
function hobbiesHandler() {

}

hobbiesHandler.prototype.getHobby = function (callback) {
    var query = {};
    new dbHandler().getData('hobbies', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

hobbiesHandler.prototype.postHobby = function (query,callback) {
	new dbHandler().insertData('hobbies', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

hobbiesHandler.prototype.updateHobby = function (query,callback) {
	new dbHandler().updateData('hobbies', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

hobbiesHandler.prototype.deleteHobby = function (query,callback) {
	new dbHandler().deleteData('hobbies', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

module.exports = hobbiesHandler;
