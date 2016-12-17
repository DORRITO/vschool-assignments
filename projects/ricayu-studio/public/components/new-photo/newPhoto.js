var app = angular.module("App");

app.controller("newPhotoCtrl", ["$scope", "$location", "HttpService", function($scope, $location, HttpService) {
       
    //post a new photo
    $scope.addPhoto = function(newPhoto) {
         HttpService.saveNewItem(newPhoto)
         $location.path("/myphoto");
    }
       
}]);