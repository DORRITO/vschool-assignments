var app = angular.module("PokeApp", []);

app.controller("MainCtrl", ["$scope", "pokemonService", function($scope, pokemonService) {
    
    $scope.getPokemon = function(pokemonNumber) {
        pokemonService.getPokemonInfo(pokemonNumber)
            .then(function(pokemon) {
            $scope.pokemon = pokemon;
        })
    }
}])

app.service("pokemonService", ["$http", function($http) {
    
    this.getPokemonInfo = function(pokemonNumber) {
        var baseUrl = "http://pokeapi.co";
        var pokemon = {};
        
        return $http.get(baseUrl + "/api/v1/pokemon/" + pokemonNumber)
            .then(function (response) {
                pokemon.name = response.data.name;
                    console.log(pokemon.name)
                pokemon.attack = response.data.attack;
                    console.log(pokemon.attack)
                pokemon.ability = response.data.abilities[0].name;
                    console.log(pokemon.ability)
//                return $http.get(baseUrl + response.data.sprites[0].resources_url);
           })
//                        .then(function(response) {
//                pokemon.image = baseUrl + response.data.image;
//                return pokemon;
//            })
    }
}]);

