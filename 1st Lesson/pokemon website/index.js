document.addEventListener("DOMContentLoaded", function () {
    const pokemonGrid = document.getElementById("pokemonGrid");

    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((pokemon) => {
                fetchPokemonDetails(pokemon.url);
            });
        })
        .catch((error) => console.error("Error fetching Pokémon:", error));

    function fetchPokemonDetails(url) {
        fetch(url)
            .then((response) => response.json())
            .then((pokemon) => {
                createPokemonCard(pokemon);
            })
            .catch((error) => console.error("Error fetching Pokémon details:", error));
    }

    function createPokemonCard(pokemon) {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        `;
        pokemonGrid.appendChild(pokemonCard);
    }
});
