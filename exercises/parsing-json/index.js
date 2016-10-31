function parsePokemon() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var pokemon = data.objects[0].pokemon;
            
            var pokemonList = document.getElementById("pokemon")
            pokemon.forEach(function(monster) {
                pokemonList.innerHTML += "<li>" + monster.name + "</li>";
            });
            
        }
    }
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    
    xhr.send();


//parsePokemon();