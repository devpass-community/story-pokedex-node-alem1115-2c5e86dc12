const service = require('../services/pokedexService');

const getPokemon = async (req, res, next) => {
    const { id } = req.params;

    const pokemon = await service.getPokemon(id);
    console.log(pokemon);
    return res.json(pokemon.name); 
};

module.exports = {
    getPokemon
}