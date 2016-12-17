var app = angular.module("App");

app.controller("photoCtrl", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.showEditableFields = false;


    $scope.myPhotos = {};
    //get photo
    (function getPhoto() {
        HttpService.getPhotos().then(function (myPhotos) {
            $scope.myPhotos = myPhotos;

        })
    })();

    //update photo
    $scope.updatePhoto = function (index, photoObject) {
        var photoId = photoObject._id;
        HttpService.updateSpecificPhoto(photoId, photoObject)
            .then(function(newestPhotoObject) {
                $scope.myPhotos = newestPhotoObject
            });
        HttpService.getPhotos().then(function (myPhotos) {
            $scope.myPhotos = myPhotos;

        })

    };
    //delete Photo
    $scope.deletePhoto = function (photoObject) {
        var photoId = photoObject._id;
        HttpService.deletePhoto(photoId);
        HttpService.getPhotos().then(function (myPhotos) {
            $scope.myPhotos = myPhotos;

        })
    };

//    $scope.discardChanges = function() {
//
//    }

}]);