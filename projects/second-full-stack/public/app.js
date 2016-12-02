var app = angular.module("App", ["ngRoute"]);

//connect to other pages and controllers
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "mainCtrl",
            templateUrl: "pages/home.html"
        })
        .when("/pictures", {
            controller: "mainCtrl",
            templateUrl: "pages/pictures.html"
        })
        .when("/about", {
            controller: "mainCtrl",
            templateUrl: "pages/about.html"
        })
        .when("/contact", {
            controller: "mainCtrl",
            templateUrl: "pages/contact.html"
        })
        .when("/account", {
            controller: "mainCtrl",
            templateUrl: "pages/account.html"
        })
        .when("/cart", {
            controller: "mainCtrl",
            templateUrl: "pages/cart.html"
        })
}]);

//Main controller to hold main functions
app.controller("mainCtrl", ["$scope", function($scope) {
    $scope.hello = "hi";
    $scope.pictures = "pictures ang is working";
    $scope.about = "about ang is working";
    $scope.contact = "contact ang is working";
    $scope.cart = "cart ang is working";
}]);