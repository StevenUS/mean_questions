app.controller("addQuestionController", function($scope, $routeParams, $location, questionFactory, sessionFactory){
    sessionFactory.checkUser(function(data){
        $scope.currUser = data.user;
        if(!$scope.currUser){
            $location.url("/");
        }
    });
    $scope.create = function(){
        $scope.question._user = $scope.currUser._id;
        if($scope.question.title.length < 10){
            alert("question must be at least 10 characters");
        }else{
            questionFactory.create($scope.question, function(){
               $scope.question="";
               $location.url("/dashboard")
            })
        }
    }
})
