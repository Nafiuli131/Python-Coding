//read and write data more efficiently

const fs=require('fs')
const readStream=fs.createReadStream('./example.txt','utf8')
//write 
const writeStream=fs.createWriteStream('example2.txt')
readStream.on('data',(chunk)=>{
    //console.log(chunk)
    writeStream.write(chunk)
    //using write stream we can copy the whole example thing into example2
})
/*what are the benefits of reading this in a chunk?
Loading the whole file ,easily manipulating and don't need to wait to load whole file
*/
//send it to a new file now
