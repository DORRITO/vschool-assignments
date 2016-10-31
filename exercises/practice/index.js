var app = angular.module("word", []);

app.controller("mainCtrl", ["$scope", function($scope) {
    
    $scope.hello = "hello";
}]);
app.controller("secondaryCtrl")