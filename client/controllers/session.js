app.controller("sessionController", function($scope, sessionFactory, $location){
    $scope.login = function(){
        console.log($scope.logReg);
        if( !$scope.logReg || $scope.logReg.name.length < 3 ){
            console.log("in if statement");
        }else{
            sessionFactory.login($scope.logReg)
        }
    }
    sessionFactory.checkUser(function(data){
        $scope.currUser = data.user;
        if(!$scope.currUser){
            $location.url("/");
        }
    });
})
