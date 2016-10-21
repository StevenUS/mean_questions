var mongoose = require("mongoose");
var User = mongoose.model("User")

module.exports = (function(){
    return {
        login: function(req, res){ //when info comes from the route, req/res is required
            User.findOne({name: req.body.name}, function(err, user){
                if(!user){
                    var user = new User(req.body).save(function(err, data){
                        if(err){
                            return res.json({status: false})
                        }else{
                            req.session.user = data;
                            req.session.save();
                            return res.json({status: true, user: data});
                        }
                    });
                }else{
                    //if there is a user in the DB that matches
                    req.session.user = user;
                    req.session.save();
                    return res.json({status: true, user: user})
                }
            })
        },
        checkUser: function(req, res){
            if(req.session.user){
                res.json({user: req.session.user})
            }else{
                res.json({user: null})
            }
        },
        logout: function(req, res){
            req.session.destroy();
            res.redirect("/");
        }
    }
})();
