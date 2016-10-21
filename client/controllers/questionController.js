app.controller("questionController", function($scope, $routeParams, $location, questionFactory, sessionFactory){

    $scope.index = function(){
        questionFactory.showOne($routeParams.id, function(data){
            $scope.question = data;
        })
    };
    $scope.index();
    sessionFactory.checkUser(function(data){
        $scope.currUser = data.user;
        if(!$scope.currUser){
            $location.url("/");
        }
    });
    $scope.addLike = function(id){
        var ans_id = {id: id}
        questionFactory.addLike(ans_id, function(){
            $scope.index();
        })
    }
})
