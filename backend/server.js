import express from 'express'
import data from './data.js'


const app = express();

app.get('/api/candles', (req, res) => {
    res.send(data.candles)
})

app.get('/', (req,res) => {
    res.send('Shernof\'s Server is Ready')
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Shernof\'s Server is running at Port http://localhost:${port}`)
})

