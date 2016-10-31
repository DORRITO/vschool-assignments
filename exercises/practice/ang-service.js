var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "TodoService", function ($scope, TodoService) {
    $scope.submitTodo = function (newTodo) {
        TodoService.postTodo(newTodo);
    };
}]);

app.service("TodoService", ["$http", function ($http) {
    this.postTodo = function (todo) {
        $http.post("http://api.vschool.io/bob/todo", todo)
    };
}]);

//app.factory("TodoService", ["$http", function ($http) {
//    return{
//        postTodo: function (todo) {
//        $http.post("http://api.vschool.io/bob/todo", todo)
//        };
//    }   
//}]);