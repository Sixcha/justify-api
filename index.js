const req = require('express/lib/request');

const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,()=> console.log(`http://localhost:${PORT}`)
)

app.use( express.json() )

app.get('/text', (req, res) =>
{
    res.status(200).send({
        Duck: 'Quack',
        Cat: 'Meow'
    })
})
