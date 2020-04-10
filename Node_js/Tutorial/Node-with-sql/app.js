const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "",
  database:"nodemysql"
  
    
});

// Connect
db.connect((err) => {
    if (err) {
    console.log("Oops... Something went wrong")
    }
    else{
        console.log('MySql Connected...');
    }
    
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) {
            console.log("Oops... Something went wrong")
            }
        console.log(result);
        res.send('Database created...');
    });
});
//create table
app.get('/createposttable',(req,res)=>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if (err) {
            console.log("Oops... Something went wrong")
            }
        console.log(result);
        res.send('post table created')
    })
})

//now insert data

app.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

//fetch post now

app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

//in this process we can add,delete,update and so on our database
