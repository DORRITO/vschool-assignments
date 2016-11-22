var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    
    $scope.hello = "hi";
    
}]);

app.directive("practiceDirective", function() {
    return {
        restrict: 'E',
        template: "<h1>this is a directive</h1>"
    }   
});

//app.config(function($routeProvider) {
//    $routeProvider.when('/', {
//        controller: 'pageOne'
//    }).when('/two', {
//        controller: 'pageTwo'
//    });
//})