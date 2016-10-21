var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    _topic: {type: Schema.Types.ObjectId, ref: "Topic"},
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    upvote: {type: Number, default: 0}
},{timestamps: true});

mongoose.model("Answer", AnswerSchema);
