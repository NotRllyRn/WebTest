console.log("Hello World!")

// get express
import express from 'express'

// get morgan
import logger from 'morgan'

// get path
import path from 'path'

// create express app
const app = express()
app.use(logger('dev'))
app.use(express.static('public'))

const __dirname = path.resolve()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// start express app
app.listen(3000, () => {
    console.log('Server started on port 3000')
})