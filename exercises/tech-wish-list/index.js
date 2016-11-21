var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    
    $routeProvider.when('/tech1', {
        controller: "People",
        templateUrl: "pages/tech1.html"
    }).when('/tech2', {
        controller: "Ships",
        templateUrl: "pages/tech2.html"
    });
    
})

app.controller("Tech1", ["$scope", "$http", function($scope, $http) {
    
    $scope.getName = function() {
    $http.get("http://swapi.co/api/people/1")
        .then(function (response) {
            $scope.person = response.data.name;
            console.log($scope.person)
        });
    };   
    $scope.getName();
  
}]);

app.controller("Tech2", ["$scope", "$http", function($scope, $http) {
    
    $scope.getName = function() {
    $http.get("http://swapi.co/api/starships/5")
        .then(function (response) {
            $scope.ship = response.data.name;
            console.log($scope.ship)
        });
    };   
    $scope.getName();
  
}]);