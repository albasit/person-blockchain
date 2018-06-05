//upload required module
const express = require("express");
const mysql = require('mysql')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

//configration of modules
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname+'/public/pages/login.html');
 });

 app.get("/login", function(req, res) {
  res.sendFile(__dirname+'/public/pages/login.html');
});
 app.get("/user/addData", function(req, res) {
    res.sendFile(__dirname+'/public/pages/user/addData.html');
 });
 app.get("/user/profile", function(req, res) {
    res.sendFile(__dirname+'/public/pages/user/profile.html');
 });
 app.get("/user/viewData", function(req, res) {
    res.sendFile(__dirname+'/public/pages/user/viewData.html');
 });


 var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blockchain'
  });
  
  connection.connect();
  
  app.post('/login', function(req, res) {
    res.render('/user/index');
  });
  app.post('/user/addData', function(req, res) {
    console.log(req.body.cnic);
  });

  
  connection.end();

  app.listen(8080);
console.log('Express server started');
  