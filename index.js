const express = require('express');
const app = express();
let port = process.env.PORT || 3001;
const importData = require('./data.json');
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get("/getTasks", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});