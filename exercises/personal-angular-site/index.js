var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    
    $routeProvider.when('/people', {
        controller: "People",
        templateUrl: "pages/people.html"
    }).when('/ship', {
        controller: "Ships",
        templateUrl: "pages/ships.html"
    }).when('/planet', {
        controller: "Planets",
        templateUrl: "pages/planets.html"
    })
    
})

app.controller("People", ["$scope", "$http", function($scope, $http) {
    
    $scope.getName = function() {
    $http.get("http://swapi.co/api/people/1")
        .then(function (response) {
            $scope.person = response.data.name;
            console.log($scope.person)
        });
    };   
    $scope.getName();
  
}]);

app.controller("Ships", ["$scope", "$http", function($scope, $http) {
    
    $scope.getName = function() {
    $http.get("http://swapi.co/api/starships/5")
        .then(function (response) {
            $scope.ship = response.data.name;
            console.log($scope.ship)
        });
    };   
    $scope.getName();
  
}]);

app.controller("Planets", ["$scope", "$http", function($scope, $http) {
    
    $scope.getName = function() {
    $http.get("http://swapi.co/api/planets/1")
        .then(function (response) {
            $scope.planet = response.data.name;
            console.log($scope.planet)
        });
    };   
    $scope.getName();
  
}]);