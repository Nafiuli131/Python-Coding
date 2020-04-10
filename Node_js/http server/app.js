//http allows to create a web server with node js
//require http module now
const http=require('http')
//now need to call a method to create server ,that gives us http server object

const server=http.createServer((req,res)=>
{
    //request and response object is req,res
    res.write('Hello world')//pass a string
    //send the response now
    res.end();
})

//need to run the server now

server.listen('3000')
//now want to listen the request from the different routes
