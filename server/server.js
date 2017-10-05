'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var sslConfig = require('./ssl-config');
var http = require('http');
var https = require('https');
var app = module.exports = loopback();


////////////////////HTTP and HTTPS starts
// app.start = function(httpOnly) {

//     var server = null;

//     var options = {
//         key: sslConfig.privateKey,
//         cert: sslConfig.certificate,
//     };
//     server = https.createServer(options, app).listen(443, function() {
//         console.log("server is running on https port 443");
//     });

//     var baseUrl = (httpOnly ? 'http://' : 'https://') + app.get('host') + ':' + 443;
//     app.emit('started', baseUrl);
//     console.log('LoopBack server listening @ %s%s', baseUrl, '/');
//     if (app.get('loopback-component-explorer')) {
//         var explorerPath = app.get('loopback-component-explorer').mountPath;
//         console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
//     }

//     // Redirect from http port 80 to https
//     http.createServer(function(req, res) {
//         res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//         res.end();
//     }).listen(80);
//     return server;
// };
///////////////End

app.start = function(httpOnly) {
    if (httpOnly === undefined) {
        httpOnly = process.env.HTTP;
    }
    var server = null;
    if (!httpOnly) {
        var options = {
            key: sslConfig.privateKey,
            cert: sslConfig.certificate,
        };
        server = https.createServer(options, app);
    } else {
        server = http.createServer(app);
    }
    server.listen(app.get('port'), function() {
        var baseUrl = (httpOnly ? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
        app.emit('started', baseUrl);
        console.log('LoopBack server listening @ %s%s', baseUrl, '/');
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
    return server;
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        var io = require('socket.io')(app.start());
    var users = [];
    var connections = [];
    var indiviualId;
    var myId;
    var receiverId;
    var callUsername;
    var callerId;
    var calleeId;
    io.sockets.on('connection', function(socket) {
        connections.push(socket);
        console.log('Connected: %s sockets connected', connections.length);

        //Disconnect
        socket.on('disconnect', function(data) {
            users.splice(users.indexOf(socket.username), 1);
            connections.splice(connections.indexOf(socket), 1);
            console.log('Disconnected: %s sockets connected', connections.length)
        });
        //For Getting all conversations
        socket.on('gettingConversation', function(data) {
            app.models.Conversations.find({ where: { userOne: data.username } }, function(err, _conversations) {
                if (err) throw err;
                else {
                    io.sockets.emit(data.to + 'myConversations', _conversations)
                }
            })
        });
        //For Getting Messages of selected conversation
        socket.on('gettingMessages', function(data) {
            console.log("THis is cid ", data.conv.cid);
            app.models.chatMessages.find({ where: { cid: data.conv.cid } }, function(err, _messages) {
                if (err) throw err;
                else {
                    io.sockets.emit(data.to + 'myMessages', _messages)
                }
            })
        });
    });
})