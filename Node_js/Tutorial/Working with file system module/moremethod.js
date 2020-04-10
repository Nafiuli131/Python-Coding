
//this method can change the example,txt file to example2.txt file
const fs=require('fs');
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('successfully rename the file')
    }

})