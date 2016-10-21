var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    _answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
},{timestamps: true});

mongoose.model("Topic", TopicSchema);
