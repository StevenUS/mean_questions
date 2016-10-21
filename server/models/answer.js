var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    title: {type: String, required: true, minlength: 5},
    detail: {type: String},
    _question: {type: Schema.Types.ObjectId, ref: "Question"},
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    like: {type: Number, default: 0}
},{timestamps: true});

mongoose.model("Answer", AnswerSchema);
