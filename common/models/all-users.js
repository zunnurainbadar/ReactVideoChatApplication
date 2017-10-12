'use strict';
const url = require('url');
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
module.exports = function(Allusers) {
    function extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }
    Allusers.afterRemote("login", function(ctx, _user, next) {
        var user;
        var res = ctx.res;
        const getUser = async() => {
            let _users = await Allusers.findOne({ where: { _id: ctx.result.userId } });
            if (_users) {
                user = _users;
            } else {}
        }
        getUser()
            .then(function(req, res) {
                ctx.result.fullname = user.fullname;
                ctx.result.username = user.username;
                ctx.result.email = user.email;
                ctx.result.avatar = user.avatar;
                ctx.result.desc = user.desc;
                ctx.result = extend(user, ctx.result);
                next();
            })
            .catch(err => console.log(err));
    })


};