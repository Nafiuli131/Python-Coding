//request a server and server send back those files to me by static folder

const http=require('http')
//file system module
const fs=require('fs')
http.createServer((req,res)=>{
//now a html file

        const readStream=fs.createReadStream('./static/index.html')

        //now write a header from response
        res.writeHead(200,{'content-type':'text.html'})//http status code=200
        //now send to json file

        //pipe to where i want to send it to the file
        readStream.pipe(res);
})
.listen(3000)
