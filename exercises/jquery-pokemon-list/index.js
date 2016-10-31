$.get("http://pokeapi.co/api/v2/pokemon", function(data){
    var pokemon = data.results;
    $.each(pokemon, function(i, value) {        
        $( ".row" ).append('<div class="center-block col-md-4" id="pokemon">' + value.name + '</div>');
    });
});
