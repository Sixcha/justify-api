const req = require('express/lib/request');

const express = require('express');
const app = express();
const port = process.env.PORT ||  5000;

app.listen(
    port,()=> console.log(`http://localhost:${port}`)
)

app.use( express.json() )

app.get('/api/justify', (req, res) =>
{
    res.status(200).send({
        Duck: 'Quack',
        Cat: 'Meow'
    })
})