//http get request and curie string and route parameteres
const express=require('express')
//call back function needs now

const app=express()
//calling method now
app.get('/',(req,res)=>{
    res.send('hello world')
})// '/' its for route and (req,res) is a callback function

//give an another route now

app.get('/example',(req,res)=>{
    res.send('hitting the example route')
})
//GET is used to retrieve remote data, and POST is used to insert/update remote data


//now create route parametere
app.get('/example/:name/:age',(req,res)=>{

    console.log(req.params);//webserver to console adding data
    //res.send('example hit route params')
    console.log(req.query)//curie string and it's a empty object and we can pass anything into this parametere
    
    res.send(req.params.name + ":" +req.params.age)
})

//data can send back called curie string params




app.listen(3000)

//when we need some exact value and must having value then we use route and when we have 
//optional settings then we use quiring string....
