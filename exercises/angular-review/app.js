var app = angular.module("MyApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "HomeController",
            templateUrl: "components/pages/home/home.html"
        })
        .when("/about", {
            controller: "AboutController",
            templateUrl: "components/pages/about/about.html"
        });
}]);
