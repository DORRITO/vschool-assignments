var app = angular.module("MyApp");

app.directive("chuckNorrisJoke", ["ChuckService", function(ChuckService) {
    return {
        restrict: "E",
        templateUrl: "components/directives/chuck-joke/chuck-joke.html",
        scope: {
            chuckjoke: "@"
        },
        link: function(scope) {
            ChuckService.getNorrisJoke().then(function(joke) {
                scope.chuckjoke = joke;
            });
        }
    }
}]);
