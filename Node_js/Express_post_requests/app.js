//http post request,working for from actually

const express= require('express')
const path=require('path')
const bodyParser=require('body-parser')
const app=express()

//module body parser to send form html then need, npm install body-parser
//app.use for middleware 
app.use('/public',express.static(path.join(__dirname,'static')))
app.use(bodyParser.urlencoded({extended: false}))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))

    
    
})

app.post('/',(req,res)=>{
    console.log(req.body)
    //database work here
    res.send('successfully post the data')
    
    
})

app.listen(3000)