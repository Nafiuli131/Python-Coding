
const http=require('http')
//now need to call a method to create server ,that gives us http server object

const server=http.createServer((req,res)=>
{
   if(req.url==='/')//using the root domain
   {
       res.write('hello world')
       res.end()//response end
   }
   else
   {
       res.write('using some other domain')
       res.end();

   }
})

//need to run the server now

server.listen('3000')
//now want to listen the request from the different routes
