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

hobbiesHandler.prototype.postHobby = function () {

};

hobbiesHandler.prototype.updateHobby = function () {

};

hobbiesHandler.prototype.deleteHobby = function () {

};

module.exports = hobbiesHandler;
