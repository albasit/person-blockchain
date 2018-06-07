//upload required module
const express = require("express");
const mysql = require('mysql')
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

//configration of modules
app.use(express.static(__dirname + "/public"));

//Default Page
app.get("/", function(req, res) {
    res.sendFile(__dirname+'/public/pages/login.html');
 });
 app.get("/login", function(req, res) {
  res.sendFile(__dirname+'/public/pages/login.html');
});

app.get("/testit", function(req, res) {
  res.sendFile(__dirname+'/public/pages/testIt.html');
});

 //Admin routes
 app.get("/admin/index", function(req, res) {
  res.sendFile(__dirname+'/public/pages/admin/index.html');
});
 app.get("/admin/addUser", function(req, res) {
  res.sendFile(__dirname+'/public/pages/admin/addUser.html');
});
app.get("/admin/viewUser", function(req, res) {
  res.sendFile(__dirname+'/public/pages/admin/viewUser.html');
});
app.get("/admin/assignRole", function(req, res) {
  res.sendFile(__dirname+'/public/pages/admin/assignRole.html');
});
app.get("/admin/profile", function(req, res) {
  res.sendFile(__dirname+'/public/pages/admin/profile.html');
});
app.get("/admin/dataType", function(req, res) {
  res.sendFile(__dirname+'/public/pages/admin/dataType.html');
});

//User routes
app.get("/user/index", function(req, res) {
  res.sendFile(__dirname+'/public/pages/user/index.html');
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
   if(req.body.userid == "123") {
    res.sendFile(__dirname +'/public/pages/admin/index.html');
   }
    else
    res.sendFile(__dirname +'/public/pages/user/index.html');
  });
  app.post('/user/addData', function(req, res) {
    console.log(req.body.cnic);
  });

  app.post('/testData',function(req,res){
    var user_id = req.body.user_id;
    var user_name = req.body.user_name;
    var result ; 
    var mysql = require('mysql');
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "blockchain"
        });//create connection
    
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          var sql = "INSERT INTO user (user_id, user_name) VALUES ?";
          var values = [[user_id,user_name]];
          con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
          });//insert into user
          
          con.query("SELECT * FROM user", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
           });// select * from user
           
  });

  
  connection.end();
  console.log(result);
  
});

  app.listen(8080);
console.log('Express server started');
  