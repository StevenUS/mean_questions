var mongoose = require("mongoose");
var Topic = mongoose.model("Topic");
var Answer = mongoose.model("Answer");
var User = mongoose.model("User");

module.exports = (function(){
    return{
        show: function(req, res){
            Topic.find()
            .populate("_answers")
            .populate("_user")
            .exec(function(err, topics){
                if(err){
                    return res.json(err)
                }res.json(topics)
            })
        },
        showOne: function(req, res){
            Topic.findById(req.params.id)
            .populate(
                {
                    path: "_answers",
                    populate: {path: "_user", model: "User"}
                }
            )
            .populate("_user")
            .exec(function(err, topic){
                if(err){
                    return res.json(err);
                }res.json(topic)
            })
        },
        create: function(req, res){
            Topic.create(req.body, function(err, result){
                if(err){
                    console.log(err);
                    return res.json(err);
                }res.json(result);
            })
        },
        createAnswer: function(req, res){
            Answer.create(req.body, function(err, answer){
                if(err){
                    return res.json(err);
                }
                Topic.findOne({_id: answer._topic},function(err, topic){
                    if(err){
                        return res.json(err);
                    }
                    topic._answers.push(answer);
                    topic.save(function(err){
                        if(err){return res.json(err)}
                        res.json(topic)
                    });
                })
            })
        },
        addLike: function(req, res){
            Answer.findOne({_id: req.body.id}, function(err, answer){
                if(err){
                    res.json(err);
                }else{
                    answer.upvote ++;
                    answer.save(function(err, answer){
                        if(err){
                            res.json(err);
                        }else{
                            res.json(answer);
                        }
                    })
                }
            })
        }
    }
})()
