/**
 * Created by KiranSp on 5/18/16.
 */
var dbHandler = require("../../db_components/dbHandler");
function achievementHandler() {

}

achievementHandler.prototype.getAchievement = function (callback) {
    var query = {};
    new dbHandler().getData('achievements', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

achievementHandler.prototype.postAchievement = function (query,callback) {

	// var query = {};
	// query=query;
	// console.log("DATATTATAT achievementHandler");
 //        console.log(query['postData']);

    new dbHandler().insertData('achievements', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

achievementHandler.prototype.updateAchievement = function (query,callback) {

	// console.log("DATATTATAT achievementHandler");
 //        console.log(query['postData']);

    new dbHandler().updateData('achievements', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};

achievementHandler.prototype.deleteAchievement = function (query,callback) {

	// console.log("DATATTATAT achievementHandler");
 //        console.log(query['postData']);

    new dbHandler().deleteData('achievements', query, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });

};

module.exports = achievementHandler;
