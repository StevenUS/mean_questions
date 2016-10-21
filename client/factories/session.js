app.factory("sessionFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.login = function(user){
        $http.post("/login", user)
        .then(function(data){
            if(data.data.status){
                $location.url("/dashboard")
            }else{
                alert("user not logged in")
            }
        })
    }
    factory.checkUser = function(callback){
        $http.get("/checkUser")
        .then(function(data){
            callback(data.data);
        })
    }
    return factory;
}])
