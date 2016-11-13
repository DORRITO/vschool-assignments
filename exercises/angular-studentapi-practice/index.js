var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.hello = "hi";
    
    $http.get('http://pokeapi.co/api/v2/pokemon/1')
        .then(function (response) {
            $scope.api = response.data.name;
            console.log(response.data.name);
        });
    
    
    $scope.addItem = function() {
        
        $http.post("http://api.vschool.io/lance/todo", {"title": "tannnnyaaaa <3"})
            .then(function (data) {
                console.log("hi");
            })
        }
    
}]);
