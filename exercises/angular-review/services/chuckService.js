var app = angular.module("MyApp");

app.service("ChuckService", ["$http", function ($http) {

    this.getNorrisJoke = function() {
        return $http.get("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
            .then(function(response) {
                return response.data.value.joke;
            });
    }

}]);
