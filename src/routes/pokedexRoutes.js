const express = require('express');
const pokedexRouter = express.Router();

const controller = require('../controllers/pokedexController');

pokedexRouter.get('/pokemon/:id', controller.getPokemon);

module.exports = pokedexRouter;