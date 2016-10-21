var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "/partials/login.html",
        controller: "sessionController"
    })
    .when("/dashboard", {
        templateUrl: "/partials/dashboard.html",
        controller: "dashController"
    })
    .when("/question/add", {
        templateUrl: "/partials/addQuestion.html",
        controller: "addQuestionController"
    })
    .when("/question/:id", {
        templateUrl: "/partials/question.html",
        controller: "questionController"
    })
    .when("/answer/:id", {
        templateUrl: "/partials/answer.html",
        controller: "answerController"
    })
    .otherwise({
        redirectTo: "/"
    })
});
