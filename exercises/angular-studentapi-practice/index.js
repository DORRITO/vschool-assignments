var app = angular.module("main", []);

app.controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.hello = "hi";
    
    ////////// get //////////////
    $scope.getItem = function() {
    $http.get('http://api.vschool.io/lance/todo')
        .then(function (response) {
            $scope.items = response.data[0];
            
        });
    }
    
    $scope.getItem();
    ////////////// add ////////////
    $scope.addItem = function() {
        
        $http.post("http://api.vschool.io/lance/todo", {"title": $scope.newItem})
            .then(function (data) {
                console.log("this post function is working");
            })
        }
    
    /////////// put ////////////
//    $scope.put = function(id) {
//        $http.put("http://api.vschool.io/lance/todo/" + id)
//            .then(function(response) {
//            items.push({"New": "New thing, hello!"});
//            console.log("put is working");
//        });
//    }
    
    //////////// delete //////////
    $scope.delete = function(id) {
        $http.delete("http://api.vschool.io/lance/todo/" + id)
            .then(function(response) {
            var deletedItem = response.data
            console.log("delete is working");
        });
    }
    
}]);
