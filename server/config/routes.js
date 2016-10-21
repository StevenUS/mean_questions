var path = require("path");
var session = require("./../controllers/sessions.js")
var tc = require("./../controllers/topicsController.js")

module.exports=function(app){
    app.post("/login", session.login);
    app.get("/checkUser", session.checkUser);
    app.get("/logOut", session.logout);
    //topics
    app.get("/topics", tc.show);
    app.get("/topic/:id", tc.showOne);
    app.post("/topic/create", tc.create);
    //answer
    app.post("/answer/create", tc.createAnswer);
    app.put("/answer/addLike", tc.addLike);
}
