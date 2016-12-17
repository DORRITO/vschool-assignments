
var app = angular.module("App");

app.service('HttpService', ['$http', function($http) {

    // owner requests

    this.getUserInfo = function() {
        return $http.get('/api/owner/')
            .then(function(response) {
                return response.data;
            })
    };

    this.updateSpecificUser = function(id, editUser) {
        return $http.put('/api/owner/' + id, editUser)
            .then(function(response) {
                return response.data;
            })
    };

    // photo requests

    this.getPhotos = function () {
        return $http.get('/api/photo/')
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("There was an error and it was: " + reponse.status + ":" + response.statusText)
            });
    };

    this.saveNewPhoto = function (input) {
        return $http.post('/api/photo/', input)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            });
    };

    this.updateSpecificPhoto = function (id, updatedPhoto) {
        return $http.put('/api/photo/' + id, updatedPhoto)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            });
    };

    this.deletePhoto = function (photo) {
        return $http.delete('/api/photo/' + photo)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            })
    };

    // get to show all collections across all users

    this.getAllPhotos = function () {
        return $http.get('/shared')
            .then( function(response) {
                return response.data;
            })
    }


}]);