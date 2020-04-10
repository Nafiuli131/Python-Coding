//a thing reminder:require function is the easiest way to include modules that exist in separate files

const fs=require('fs');
fs.appendFile('example2.txt','some data being appended',(err)=>{
    //apend=add (something) to the end of a written document.
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('successfully appended data to file')
        //appende some data to the end of the example2 file
    }
})
