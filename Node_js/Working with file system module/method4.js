const fs=require('fs')

//delete  the file

fs.unlink('example2.txt',(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('successfully deleted the file')
    }
})