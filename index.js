console.log("Hello World!")

// get express
import express from 'express'

// create express app
const app = express()

// define a route
app.get('/', (req, res) => {
    res.send('Hello, Lotie :)')
})

// start express app
app.listen(3000, () => {
    console.log('Server started on port 3000')
})