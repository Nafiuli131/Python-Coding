//static file=html,css,image files and so on

const express=require('express')
//require a path module
const path=require('path')

const app=express()
//app.use is using for middlewear

app.use('/public',express.static(path.join(__dirname,'static')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'))

    //in that same process I can send images,videos and others files and so on
    
})

app.listen(3000)
