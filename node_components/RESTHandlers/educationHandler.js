/**
 * Created by KiranSp on 5/18/16.
 */

var dbHandler = require("../../db_components/dbHandler");
function educationHandler() {

}

educationHandler.prototype.getEducation = function (callback) {
    var query = {};
    new dbHandler().getData('education', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

educationHandler.prototype.postEducation = function (query,callback) {

	// var query = {};
	// query=query;
	console.log("DATATTATAT educationHandler");
        console.log(query['postData']);

    new dbHandler().insertData('education', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

educationHandler.prototype.updateEducation = function (query,callback) {

	console.log("DATATTATAT educationHandler");
        console.log(query['postData']);

    new dbHandler().updateData('education', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

educationHandler.prototype.deleteEducation = function (query,callback) {

	// console.log("DATATTATAT educationHandler");
 //        console.log(query['postData']);

    new dbHandler().deleteData('education', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

module.exports = educationHandler;
