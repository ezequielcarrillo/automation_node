var Commons = function() {
    var timeNow = function() {
        var time = new Date().toUTCString();
        return time;
    };

    var user = function() {
        return "user";
    };

    return {
        timeNow: timeNow,
        user: user,
    }
}();

module.exports = Commons;