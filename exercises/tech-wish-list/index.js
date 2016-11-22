var app = angular.module("app", ["ngRoute"]);

app.controller("Tech1", ["$scope", function($scope) {
    
    
    $scope.name1 = "Alienware Computer";
    $scope.price1 = "$200.95";  
    
    $scope.name2 = "Lightsaber";
    $scope.price2 = "$2.95";
       
}]);

app.config(function ($routeProvider) {
    
    $routeProvider.when('/tech1', {
        controller: "Tech1",
        templateUrl: "pages/tech1.tpl.html"
    }).when('/tech2', {
        controller: "Tech1",
        templateUrl: "pages/tech2.tpl.html"
    });
    
})

app.directive("tech1Directive", function() {
    return {
        restrict: 'E',
        templateUrl: "pages/tech1Dir.tpl.html"
    }   
});

app.directive("tech2Directive", function() {
    return {
        restrict: 'E',
        templateUrl: "pages/tech2Dir.tpl.html"
    }
});