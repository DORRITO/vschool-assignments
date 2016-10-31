var app = angular.module("main", []);

app.controller("myCtrl", ["$scope", function($scope) {

    $scope.picArray = [];
    $scope.infoSubmit = function() {
        var pic = {
            title: $scope.title,
            img: $scope.img,
            desc: $scope.desc,
        }
        $scope.picArray.push(pic);
    }
}]);