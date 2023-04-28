const express = require ('express')
const app = express ()
const PORT = process.env.PORT || 3000
const pokemons = require('./models/pokemon')


// index
app.get ('/', (req, res) => {
    res.send('Welcome to the pokemon App!')
})


// listen
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
