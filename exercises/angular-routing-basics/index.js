var app = angular.module("main", ["ngRoute"])

app.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        controller: 'home',
        templateUrl: 'page-one/home.html'
    })
    
    .when('/about', {
        controller: 'about',
        templateUrl: 'page-two/about.html'
    })
    
    .when('/love', {
        controller: 'love',
        templateUrl: 'page-three/why-i-love.html'
    })
})
