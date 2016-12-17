var app = angular.module('App');

app.controller('browseCtrl', ["$scope", 'HttpService', function($scope, HttpService) {

    $scope.allPhotos = {};

    (function getAllPhotos(){
        HttpService.getAllPhotos().then(function(allPhotos){
            $scope.allPhotos = allPhotos;
        })
    })();

}]);