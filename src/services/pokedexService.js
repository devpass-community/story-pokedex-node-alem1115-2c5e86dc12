const axios = require('axios');
const https = require('https');

const getPokemon = async (id) => {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let result;
    try {
        const response = await axios.get(apiUrl, { httpsAgent: agent });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};

module.exports = {
    getPokemon
}