app.controller("topicController", function($scope, $routeParams, topicFactory, sessionFactory){

    $scope.index = function(){
        topicFactory.showOne($routeParams.id, function(data){
            $scope.topic = data;
        })
    };
    $scope.index();
    sessionFactory.checkUser(function(data){
        $scope.currUser = data.user;
        if(!$scope.currUser){
            return;
        }
    });
    $scope.createAnswer = function(){
        $scope.answer._user = $scope.currUser._id;
        $scope.answer._topic = $scope.topic._id;

        topicFactory.createAnswer($scope.answer, function(){
            $scope.answer = "";
            $scope.index();
        })
    }
    $scope.addLike = function(id){
        var ans_id = {id: id}
        topicFactory.addLike(ans_id, function(){
            $scope.index();
        })
    }
})
