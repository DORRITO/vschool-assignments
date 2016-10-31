var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    
    $scope.hi = "hello"
    
    $scope.todos = [
        {'title': 'todo item', 'done': false}
    ]
    
    $scope.addTodo = function(){
        $scope.todos.push({'title': $scope.newTodo, 'done':false});
        $scope.newTodo = '';
    }
    $scope.delete = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        })
    }
    
}]);


