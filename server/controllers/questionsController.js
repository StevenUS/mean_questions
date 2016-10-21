var mongoose = require("mongoose");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer");
var User = mongoose.model("User");

module.exports = (function(){
    return{
        show: function(req, res){
            Question.find()
            .populate("_answers")
            .populate("_user")
            .exec(function(err, questions){
                if(err){
                    return res.json(err)
                }res.json(questions)
            })
        },
        showOne: function(req, res){
            Question.findById(req.params.id)
            .populate(
                {
                    path: "_answers",
                    populate: {path: "_user", model: "User"}
                }
            )
            .populate("_user")
            .exec(function(err, question){
                if(err){
                    return res.json(err);
                }res.json(question)
            })
        },
        create: function(req, res){
            Question.create(req.body, function(err, result){
                if(err){
                    return res.json(err);
                }res.json(result);
            })
        },
        createAnswer: function(req, res){
            Answer.create(req.body, function(err, answer){
                if(err){
                    return res.json(err);
                }
                Question.findOne({_id: answer._question},function(err, question){
                    if(err){
                        return res.json(err);
                    }
                    question._answers.push(answer);
                    question.save(function(err){
                        if(err){return res.json(err)}
                        res.json(question)
                    });
                })
            })
        },
        addLike: function(req, res){
            Answer.findOne({_id: req.body.id}, function(err, answer){
                if(err){
                    res.json(err);
                }else{
                    answer.like ++;
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
