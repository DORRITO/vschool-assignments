var app = angular.module("app", ["ngRoute"]);

app.controller("MainCtrl", ["$scope", function($scope) {
    
    $scope.hello = "hi";
    
}]);


app.config(function ($routeProvider) {
    
    $routeProvider
      
    .when('/about', {
        controller: "MainCtrl",
        templateUrl: "pages/about.html"
    })
});