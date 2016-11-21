var app = angular.module("main", []);

app.controller("MainCtrl", ["$scope", "hey", function($scope, hey) {
    $scope.luke = "ok"
    $scope.wop = "hi"
    $scope.name = hey.name;
}]);

app.service("hey", function() {
    this.name = "heyyyyyy";
})