app.controller("answerController", function($scope, $routeParams, $location, questionFactory, sessionFactory){
    $scope.index = function(){
        questionFactory.showOne($routeParams.id, function(data){
            $scope.question = data;
        })
    };
    $scope.index();
    sessionFactory.checkUser(function(data){
        $scope.currUser = data.user;
        if(!$scope.currUser){
            $location.url("/")
            return;
        }
    });
    $scope.createAnswer = function(){
        if($scope.answer.title.length < 5){
            alert("answer must be at least 5 characters")
            return;
        }else{
            $scope.answer._user = $scope.currUser._id;
            $scope.answer._question = $scope.question._id;

            questionFactory.createAnswer($scope.answer, function(){
                $scope.answer = "";
                $location.url("/question/"+$scope.question._id);
            })
        }
    }
    $scope.addLike = function(id){
        var ans_id = {id: id}
        questionFactory.addLike(ans_id, function(){
            $scope.index();
        })
    }
})
