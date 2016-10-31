var app = angular.module("angularBeginning", []);

app.controller('mainCtrl', ['$scope', function($scope) {
    
    $scope.word = "Hello";
    
}]);