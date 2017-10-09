var path = require('path');

module.exports = function(app) {

    var states = [
        "/",
        "/login",
        "/signup",
        "/app",
        "/videoCall",
        "/call"
    ]

    states.forEach(function(state) {
        app.get(state, function(req, res, next) {
            console.log(__dirname, '../..', 'client/public')
            res.sendFile('index.html', {
                root: path.resolve(__dirname, '../..', 'client/public')
            });
        });
    })
};