var app = angular.module("bountyApp", []);

app.controller("bountyController", ["$scope", "$http", function ($scope, $http)]) {
    $scope.test = "hello world!";


    $scope.getAllBounties = .service("HttpService", function ($http) {
        this.getAllBounties = function () {
            return http.get("/bounties")
                .then(function (response) {
                    return response.data;
                })
        }
    })

    HttpServie.getAllBounties()
        .then(function (bounties) {
            $scope.bounties = bounties;
        })
                                    
    $scope.updateBounty = function () {
        return $http.put("/bounties/" +updatedBounty.id, updatedBounty)
            .then(function (response) {
                return .data
                                    })
    }
}