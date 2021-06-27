import express from 'express'
import data from './data.js'


const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>Shernof's Server is Running</h1>`)
})

app.get('/api/candles', (req, res) => {
    res.send(data.candles)
})
const port = process.env.PORT || 5000
app.listen(port, (req, res) => {
    console.log(`running at http://localhost:${port}`)
})

