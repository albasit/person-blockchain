//upload required module
const express = require("express");
const mysql = require('mysql')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

//configration of modules
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname+'/public/pages/index.html');
 });

 app.get("/addData", function(req, res) {
    res.sendFile(__dirname+'/public/pages/addData.html');
 });
 app.get("/profile", function(req, res) {
    res.sendFile(__dirname+'/public/pages/profile.html');
 });
 app.get("/viewData", function(req, res) {
    res.sendFile(__dirname+'/public/pages/viewData.html');
 });


 var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blockchain'
  });
  
  connection.connect();
  
  app.post('/addData', function(req, res) {
    console.log(req.body.cnic);
  });
  
  connection.end();

  app.listen(8080);
console.log('Express server started');
  