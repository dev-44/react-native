require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const authMiddleware = require('./middleware/authMiddleware')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(express.json({limit: '16mb', extended: true}))
//app.use(express.urlencoded({limit: '16mb', extended: true}))

app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri)
mongoose.set('strictQuery', true)

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB', err)
})

app.get('/', authMiddleware, (req, res) => {
    res.send(`Your email ${req.user.email}`)
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})