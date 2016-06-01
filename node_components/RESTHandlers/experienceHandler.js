
var dbHandler = require("../../db_components/dbHandler");
function experienceHandler() {

}

experienceHandler.prototype.getExperience = function (callback) {
    var query = {};
    new dbHandler().getData('experiences', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

experienceHandler.prototype.postExperience = function (query,callback) {

	// var query = {};
	// query=query;

    new dbHandler().insertData('experiences', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

experienceHandler.prototype.updateExperience = function (query,callback) {

    new dbHandler().updateData('experiences', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

experienceHandler.prototype.deleteExperience = function (query,callback) {

    new dbHandler().deleteData('experiences', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

module.exports = experienceHandler;
