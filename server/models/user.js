var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    _topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
    _answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
},{timestams: true});

mongoose.model("User", UserSchema);
