var path = require("path");
var session = require("./../controllers/sessions.js")
var qc = require("./../controllers/questionsController.js")

module.exports=function(app){
    app.post("/login", session.login);
    app.get("/checkUser", session.checkUser);
    app.get("/logOut", session.logout);
    //questions
    app.get("/questions", qc.show);
    app.get("/question/:id", qc.showOne);
    app.post("/question/create", qc.create);
    //answer
    app.post("/answer/create", qc.createAnswer);
    app.put("/answer/addLike", qc.addLike);
}
