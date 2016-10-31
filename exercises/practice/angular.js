var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", function($scope) {
    $scope.hello = "hi"
}])