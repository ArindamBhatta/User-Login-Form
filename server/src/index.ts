import express from 'express'
import bodyParser from 'body-parser'
import apiRoutes from './api'
import cors from 'cors'

const app = express()
const port = 8111

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', apiRoutes())

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
