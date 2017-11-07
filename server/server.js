'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var sslConfig = require('./ssl-config');
var http = require('http');
var https = require('https');
var app = module.exports = loopback();
const uuidv4 = require('uuid/v4');

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
                    const getUser = async() => {
                        for (var i = 0; i < _conversations.length; i++) {
                            console.log("indside for");
                            let _users = await app.models.allUsers.findOne({ where: { username: _conversations[i].userTwo } });
                            console.log("This is users ", _users);
                            if (_users) {
                                _conversations[i].avatar = _users.avatar;
                                _conversations[i].desc = _users.desc;
                            } else {}
                        }
                    }
                    getUser()
                        .then(function() {
                            console.log("This is conversation ", _conversations);
                            io.sockets.emit(data.to + 'myConversations', _conversations)
                        })
                        .catch(err => console.log(err));
                }
            })
        });
        //For Getting all recent conversations
        socket.on('gettingRecentConversation', function(data) {
            app.models.Conversations.find({ order: 'lastMessageTime DESC', where: { userOne: data.username } }, function(err, _conversations) {
                if (err) throw err;
                else {
                    console.log("This is recent conversations ", _conversations);
                    const getUser = async() => {
                        for (var i = 0; i < _conversations.length; i++) {
                            let _users = await app.models.allUsers.findOne({ where: { username: _conversations[i].userTwo } });
                            if (_users) {
                                _conversations[i].avatar = _users.avatar;
                                _conversations[i].desc = _users.desc;
                            } else {}
                        }
                    }
                    getUser()
                        .then(function() {
                            console.log("This is conversation ", _conversations);
                            io.sockets.emit(data.to + 'myConversations', _conversations)
                        })
                        .catch(err => console.log(err));
                }
            })
        });
        //For Getting all recent conversations
        socket.on('unreadConversations', function(data) {
            console.log("Unread conversation");
            app.models.Conversations.find({ where: { isRead: "true" } }, function(err, _conv) {
                if (err) throw err;
                else {
                    const getUser = async() => {
                        for (var i = 0; i < _conv.length; i++) {
                            console.log("indside for");
                            let _users = await app.models.allUsers.findOne({ where: { username: _conv[i].userTwo } });
                            console.log("This is users ", _users);
                            if (_users) {
                                _conv[i].avatar = _users.avatar;
                                _conv[i].desc = _users.desc;
                            } else {}
                        }
                    }
                    getUser()
                        .then(function() {
                            console.log('This is conversation ', _conv);
                            io.sockets.emit(data.to + 'myConversations', _conv);
                        })
                        .catch(err => console.log(err));
                }
            })
        });
        //For Getting Messages of selected conversation
        socket.on('gettingMessages', function(data) {
            if (data) {
                if (data.conv) {
                    app.models.chatMessages.find({ where: { cid: data.conv.cid } }, function(err, _messages) {
                        if (err) throw err;
                        else {
                            for (var i = 0; i < _messages.length; i++) {
                                app.models.chatMessages.updateAll({ _id: _messages[i]._id }, { status: "read" }, function(err, _conv) {
                                    if (err) throw err;
                                    else {
                                        console.log("Conversation updated successfully ", _conv);
                                    }
                                })
                            }
                            io.sockets.emit(data.to + 'myMessages', _messages)
                        }
                    })
                }
                try {
                    app.models.Conversations.updateAll({ _id: data.conv.id }, { isRead: "false" }, function(err, docs) {
                        if (err) throw err;
                        else {
                            console.log("isRead updated successfully");
                        }
                    })
                } catch (e) {
                    console.log("Error is catched on 174");
                }

            }

        });
        //For Sending Messages
        socket.on('sendMessage', function(data) {
            app.models.chatMessages.create({
                    to: data.to,
                    message: data.message,
                    sender: data.sender,
                    conversationWith: data.conversationWith,
                    time: data.time,
                    date: data.date,
                    cid: data.cid,
                    status: 'unread',
                },
                function(err, _messages) {
                    if (err) throw err;
                    else {
                        io.sockets.emit(data.to + 'messageSent', data);
                        io.sockets.emit(data.sender + 'messageSent', data);
                    }
                }
            );
            app.models.Conversations.updateAll({ cid: data.cid }, { lastMessage: data.message, lastMessageTime: Date.now() },
                function(err, _conv) {
                    if (err) throw err;
                    else {
                        console.log(
                            'Conversation updated successfully ',
                            _conv
                        );
                    }
                }
            );
            app.models.Conversations.updateAll({ _id: data.convId }, { isRead: 'true' },
                function(err, _conv) {
                    if (err) throw err;
                    else {
                        console.log(
                            'Conversation updated successfully ',
                            _conv
                        );
                    }
                }
            );
        });
        //For storing all users in store to search
        socket.on('gettingALlUsers', function(data) {
                app.models.allUsers.find({}, function(err, _users) {
                    if (err) throw err;
                    else {
                        var data = [];
                        for (var i = 0; i < _users.length; i++) {
                            data.push({ id: _users[i].id, username: _users[i].username, fullname: _users[i].fullname, avatar: _users[i].avatar })
                        }
                        socket.emit('receivingUsers', data);
                    }
                })
            })
            //Change Password
        socket.on('changePassword', function(data) {
            app.models.allUsers.findOne({ where: { _id: data.id } }, function(err, _user) {
                if (err) throw err;
                else {
                    _user.hasPassword(
                        data.oldPassword,
                        function(err, isMatch) {
                            if (!isMatch) {
                                io.sockets.emit(data.to + 'changedPassword', { msg: "Please Enter correct old password" })
                            } else {
                                _user.updateAttribute('password', data.newPassword, function(err, nuser) {
                                    if (err) throw error;
                                    else {
                                        io.sockets.emit(data.to + 'changedPassword', { msg: "Password updated Succesfully" })
                                    }
                                });
                                console.log("Passwords matched");
                            }
                        }
                    );
                }
            });
        })

        //Changin description of person
        socket.on('saveDesc', function(data) {
                app.models.allUsers.updateAll({ _id: data.id }, { desc: data.desc }, function(err, _user) {
                    if (err) throw err;
                    else {
                        app.models.allUsers.findOne({ where: { _id: data.id } }, function(err, _users) {
                            if (err) throw err;
                            else {
                                io.sockets.emit(data.to + 'descEdited', _users);
                            }
                        })
                    }
                })
            })
            //For Video call
        socket.on('NewVideoCall', function(data) {
                //Sending call notification
                io.sockets.emit(data.to + 'calling', data)
            })
            //For call
        socket.on('NewCall', function(data) {
                //Sending call notification
                io.sockets.emit(data.to + 'calling', data)
            })
            //When user click on answer
        socket.on('answer', function(data) {
                //Sending notification that answer is clicked
                io.sockets.emit(data.to + 'answers', data)
            })
            //When user rejects the call
        socket.on('reject', function(data) {
                //Sending notification that reject button is clicked
                io.sockets.emit(data.to + 'rejects', data)
            })
            //When user press hangup
        socket.on('hangup', function(data) {
                //Sending notification to Caller
                io.sockets.emit(data.to + "hangups", data);
                //Sending notification to Callee
                io.sockets.emit(data.from + "hangups", data);
            })
            //When user clicks cancel
        socket.on('cancel', function(data) {
                //Sending call notification
                io.sockets.emit(data.to + 'cancels', data)
            })
            //When user is busy on another call
        socket.on('busy', function(data) {
            //Sending call notification
            io.sockets.emit(data.to + 'busys', data)
        })

    });
})