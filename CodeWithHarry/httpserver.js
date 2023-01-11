const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>
{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> This is Jatin Ranpariya </h1> <p> I am studying in DAIICT!</p>');
});

server.listen(port, () =>
{
    console.log(`Server is listening on port ${port}`);
});