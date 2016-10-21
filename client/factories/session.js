app.factory("sessionFactory", ["$http", "$location", function($http, $location){
    var factory = {};
    factory.login = function(user){
        console.log(user);
        $http.post("/login", user)
        .then(function(data){
            console.log(data.data);
            if(data.data.status){
                $location.url("/dashboard")
            }else{
                alert("Bad!!!")
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
