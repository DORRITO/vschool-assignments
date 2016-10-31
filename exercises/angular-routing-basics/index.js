var app = angular.module("main", ["ngRoute"])

.config(function($routeProvider){
    $routeProvider.when('/one', {
        controller: 'pageOneCtrl',
        templateUrl: 'page-one/page-one.html'
    }).when('/two',{
        controller: 'pageTwo',
        templateUrl: 'page-two/page-two.html'
    })
})
