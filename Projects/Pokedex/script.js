var poke = 1;
var container;

window.addEventListener('load', function() {
    container = document.getElementById('container');
    generateSprite();
});

function generateSprite() {
    $.getJSON('https://pokeapi.co/api/v2/pokemon/' + poke, function(data) {
        var pokeContainer = document.createElement('div');
        pokeContainer.className = "pokeContainer";

        var pokeName = document.createElement('p');
        var pokeNameText = document.createTextNode(data.species.name);
        pokeName.appendChild(pokeNameText);

        var pokeSprite = document.createElement('img');
        pokeSprite.className = "pokeSprite";
        pokeSprite.src = data.sprites.front_default;

        var pokeType = document.createElement('p');
        var pokeTypeText = document.createTextNode(data.types[0].type.name);
        pokeType.appendChild(pokeTypeText);
        pokeType.className = "pokeType"
        
        pokeContainer.appendChild(pokeName);
        pokeContainer.appendChild(pokeSprite);
        pokeContainer.appendChild(pokeType);
        if(data.types.length > 1) {
            var pokeType2 = document.createElement('p');
            var pokeTypeText2 = document.createTextNode(data.types[1].type.name);
            pokeType2.appendChild(pokeTypeText2);
            pokeType2.className = "pokeType2"
            pokeContainer.appendChild(pokeType2);
        } 
        
        container.appendChild(pokeContainer);
        (data.types.length > 1 ? pokeContainer.id = data.types[1].type.name : pokeContainer.id = data.types[0].type.name);
    });
}
