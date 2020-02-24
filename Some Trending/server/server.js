const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
// const mysql = require('mysql');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var module = require('./module/test');

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '123456',
//     database : 'test'
// })

app.get('/api/melon',module.MelonCrawling);

app.listen(port, () => console.log(`Listening on port ${port}`));
