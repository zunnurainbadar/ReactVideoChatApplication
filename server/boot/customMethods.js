module.exports = function(app) {

    app.get('/userInfo', function(req, res) {
        console.log("Inside userinfo")
            // app.models.allUsers.findOne({ where: { _id: "59d5d83af25597133c8c6ae1" } }, function(err, docs) {
            //     if (err) throw err;
            //     else {
            //         console.log("THis is user ", docs);
            //         res.json(docs)
            //     }
            // })
    })
};