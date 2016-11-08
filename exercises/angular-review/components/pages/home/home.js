var app = angular.module("MyApp");

app.controller("HomeController", ["$scope", "ChuckService", function ($scope, ChuckService) {
    // No longer need anything here because the directive is handling its
    // own HTTP request (by using the service).
    // I would still use this for getting data that is specific to this page only
    // However, anything I would normally want to have available across more than
    // just this one view (the "home" page), I would likely put in a service or
    // directive instead.
}]);
