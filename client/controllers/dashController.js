app.controller("dashController", function($scope, $location, questionFactory, sessionFactory){
    $scope.index = function(){
        questionFactory.show(function(data){
            $scope.questions = data;
        })
    };
    $scope.index();
    sessionFactory.checkUser(function(data){
        $scope.currUser = data.user;
        if(!$scope.currUser){
            alert("no user in session");
            $location.url("/");
        }
    });
})
