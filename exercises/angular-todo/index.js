var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
       
    $scope.getTodos = function() {
        $http.get("http://api.vschool.io/lance/todo")
            .then(function(response) {
            $scope.todos = response.data
        })
    }
    
    $scope.getTodos();
    
    $scope.addTodo = function() {
        var newTodo = {'title': $scope.newTodo, 'completed':false}
        $http.post("http://api.vschool.io/lance/todo", newTodo)
            .then(function(response) {
                newTodo = response.data;
            })
           
        $scope.todos.push(newTodo);
        $scope.newTodo = '';
    }
    
    $scope.update = function() {
        $http.put("http://api.vschool.io/lance/todo/" + id)
            .then(function(response) {
            newTodo = response.data;
        })
    }
    
    
    $scope.delete = function(id) {
        $http.delete("http://api.vschool.io/lance/todo/" + id)
            .then(function(response) {
            var deletedTodo = response.data;
        })
        
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        })
    }
    
}]);


