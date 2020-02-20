const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var module = require('./module/test');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'test'
})

app.get('/show',function(req,res){
    var sql3 = 'select * from login';
    connection.query(sql3,function(err,row,field){
        if (err) throw err;

        var user = [];  

        for(var i = 0 ; i < row.length; i++) {
            user.push({
                uniqueId : row[i].id,
                id : row[i].user_id,
                password : row[i].password,
                name : row[i].name,
                register_date : row[i].register_date
            })
        }
        res.send({
            "user" : user,
        })
    })
})

app.get('/name', module.getName);

app.get('/api/movie', module.getMovie);

app.listen(port, () => console.log(`Listening on port ${port}`));
