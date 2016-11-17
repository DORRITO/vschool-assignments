var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.hello = "hi";
    
    $http.get('http://pokeapi.co/api/v2/pokemon/1')
        .then(function (response) {
            $scope.rules = response.data.name;
            console.log(response.data.name);
        });
}]);
