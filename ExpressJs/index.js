const express = require('express')
const path = require('path')
const app = express()
const port = 3000


// const middleWare = (req, res, next) =>
// {
//     console.log(req);
//     next()
// }

app.use(express.static(path.join(__dirname, "public")));
// app.use(middleWare);

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/hello/', (req, res) =>
{
    res.send('Hello! How are you?');
})
app.get('/hello/:x', (req, res) =>
{ 
    res.send('Hello! How are you? ' + req.params.x);
})

app.get('/about', (req, res) =>
{
    // res.send('about');
    // res.sendFile(path.join(__dirname, 'index.html'));
    // res.status(500);
    res.json({ jatin: 1510 });
})

app.listen(port, () =>
{
    console.log(`Server is listening on http://localhost:${port}`)
})