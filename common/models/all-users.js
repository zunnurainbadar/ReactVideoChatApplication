'use strict';

module.exports = function(Allusers) {
    Allusers.afterRemote("login", function(ctx, next) {
        console.log("After login");
        var res = ctx.res;
        res.redirect('/app')
        next();
    })
};