const express = require('express')
const app = express()
const moviesrouter = require('./Routes/MoviesRoutes')
const cors = require('cors')


app.use(cors())
app.use(express.static('./data/images'))
app.use(express.json())



app.use('/api/movies' , moviesrouter)


module.exports = app