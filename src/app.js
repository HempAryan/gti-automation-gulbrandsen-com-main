const path = require('path')
const express = require('express')
const app = express()
const port = 3000

// define paths for Express config
const pubDir = path.join(__dirname, '../public')

// setup static directory to serve
app.use(express.static(pubDir))


// run the Express server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})