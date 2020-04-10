//request a server and server send back those files to me by static folder

const http=require('http')
//file system module
const fs=require('fs')
http.createServer((req,res)=>{
//now a html file

       http.createServer((req,res)=>{
           const readStream=fs.createReadStream('./static/example.json')
           res.writeHead(200,{'content-type':'application/json'})
           readStream.pipe(res);
       })
})
.listen(3001)
