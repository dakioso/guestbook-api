const express = require('express');
let mysql = require("mysql");
let connection =    mysql.createPool({
        connectionLimit : 100,
        host     : 'sql131.main-hosting.eu',
        user     : 'u905770195_gbdb',
        password : '50bYG4Dj',
        database : 'u905770195_gbdb',
        debug    :  false
    });

const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

const student = {
  firstname: "Lisa",
  lastname: "LaFlamme",
  age: 21,
  classes: ["street", "dancehall", "balett"]
  };

  const teacher = {
    firstname: "Adrienne",
    lastname: "Picard",
    age: 21,
    classes: ["street", "dancehall", "balett"]
    };



const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };



  let res;


app.get('./', function(req, res){
    res.send ("Welcome to my api");
});

app.get('/student', function (req, res) {
    res.json(student);
});

app.get('/teacher', function (req, res) {
  res.json(teacher);
});


app.get('/guestbook', function (req, res) {
  connection.query('SELECT * FROM `guestbook`', [], function (error, results, fields) {

  res.json(results);

});
});

app.post('/guestbook', function (req, res) {
  let query = "INSERT INTO ??(??,??) VALUES (?,?)";
  let inserts = ['guestbook', 'author', 'body', req.body.author, req.body.body];
  sql = mysql.format(query, inserts);
  query = mysql.format(query,inserts);
  connection.query(query,function(err,rows){
    if(err) {
        res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    } else {
        res.json({"Error" : false, "Message" : "Comment Added !"});
    }
});
});

console.log(`App listening on port ${port}`);
