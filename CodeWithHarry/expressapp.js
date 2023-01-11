const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000

app.get('/', (req, res) =>
{
    const data = fs.readFileSync('./index.html');
    res.send(data.toString());
})

app.get('/about', (req, res) =>
{
    res.send('<h1> About : Jatin Ranpariya </h1>');
})

app.listen(port, () =>
{
    console.log(`Example app listening on port http://localhost:${port}`)
})