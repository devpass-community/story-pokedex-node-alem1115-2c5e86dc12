
const pokedexRoutes = require('./src/routes/pokedexRoutes');

const express = require('express')
const app = express()
const port = 3000

app.use(pokedexRoutes);

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`)
})