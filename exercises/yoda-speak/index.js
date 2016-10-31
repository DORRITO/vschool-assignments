//$http.get

var app = angular.module("main", []);

app.controller("myCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.click = function() {
        //key for the api
        var config = {  
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        //get the api plus what the user types
        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.saying, config)
            .then(function (response) {
                $scope.yoda = response.data;
            });
        
    }; 
}]);