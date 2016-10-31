var app = angular.module('main', []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    $http.get("http://swapi.co/api/films/1")
        .then(function (result) {
            $scope.crawl = result.data.opening_crawl;
    });
}]);