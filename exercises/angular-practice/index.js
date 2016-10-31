var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", function($scope) {
    $scope.hello = "hi";
    $scope.list = ["hi", "there", "bob"];
}]);
