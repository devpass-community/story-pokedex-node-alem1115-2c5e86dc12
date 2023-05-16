const axios = require('axios');
const getPokemon = async (id) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let result;
    await axios
        .get(apiUrl)
        .then(
            function (response) {
                // Add your solution here!
            }
        );

    return result;
};

module.exports = {
    getPokemon
}