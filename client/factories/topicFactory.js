app.factory("topicFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.show = function(callback){
        $http.get('/topics').then(function(returned_data){
            topics = returned_data.data;
            callback(topics);

        })
    };
    factory.showOne = function( id, callback){
        $http.get('/topic/' + id).then(function(returned_data){
            topic = returned_data.data;
            callback(topic);

        })
    };
    factory.create = function(topic, callback){
        $http.post("/topic/create", topic)
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
        console.log(id)
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
