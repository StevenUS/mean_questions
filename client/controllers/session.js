app.controller("sessionController", function($scope, sessionFactory, $location){
    $(function() {
        $("#fadeInContent").fadeIn(3000);
        setTimeout(function(){$("#fadeInContent").css("color", "#33C3F0")}, 3000)


    })
    $scope.login = function(){
        if( !$scope.logReg || $scope.logReg.name.length < 3 ){
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
