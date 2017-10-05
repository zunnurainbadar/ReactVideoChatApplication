'use strict';

module.exports = function(Allusers) {
    Allusers.afterRemote("login", function(ctx, _user, next) {
        console.log("After login");
        var res = ctx.res;
        console.log("This is data ");
        console.log(ctx.args);
        console.log("This is result ");
        console.log(ctx.result.userId);
        Allusers.findOne({ where: { _id: ctx.result.userId } }, function(err, docs) {
            if (err) throw err;
            else {
                console.log("THis is user ", docs);
            }
        })
        res.redirect('/app')
            // next();
    })
};