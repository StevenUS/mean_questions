app.controller("dashController", function($scope, topicFactory, sessionFactory){
    $scope.topics = [];
    $scope.index = function(){
        topicFactory.show(function(data){
            $scope.topics = data;
        })
    };
    $scope.index();
    sessionFactory.checkUser(function(data){
        console.log(data.user);
        $scope.currUser = data.user;
        if(!$scope.currUser){
            alert("no user in session")
        }
    });
    $scope.create = function(){
        $scope.topic._user = $scope.currUser._id;
        topicFactory.create($scope.topic, function(){
           $scope.topic="";
           $scope.index();
        })
    }
})
