//express js is a framework for node and it needs less code
//npm init --yes for package.json
//npm install express for express module 

const express=require('express')
//call back function needs now

const app=express()
//calling method now
app.get('/',(req,res)=>{
    res.send('hello world')
})// '/' its for route and (req,res) is a callback function

app.listen(3000)
