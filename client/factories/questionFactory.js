app.factory("questionFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.show = function(callback){
        $http.get('/questions').then(function(returned_data){
            questions = returned_data.data;
            callback(questions);

        })
    };
    factory.showOne = function( id, callback){
        $http.get('/question/' + id).then(function(returned_data){
            question = returned_data.data;
            callback(question);

        })
    };
    factory.create = function(question, callback){
        $http.post("/question/create", question)
        .then(function(data){
            if(typeof(callback) == "function"){
                callback(data)
            }else{
                alert("front end factory error")
            }
        })
    };
    factory.createAnswer = function(answer, callback){
        $http.post("/answer/create", answer)
        .then(function(data){
            if(typeof(callback) == "function"){
                callback(data.data)
            }else{
                alert("front end factory error")
            }
        })
    };
    factory.addLike = function(id, callback){
        $http.put("/answer/addLike", id)
        .then(function(data){
            if(typeof(callback)=="function"){
                callback(data.data)
            }else{
                alert("front end factory error")
            }
        })
    }
    return factory;
}])
