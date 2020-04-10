//how to delete multiple files
//example folder and the files are a,b.txt
//a.txt and b.txt are multiple files here

const fs=require('fs')

fs.readdir('example',(err,files)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        for(let file of files)
        {
            fs.unlink('./example/' + file,(err)=>{
                if(err)
                {
                    console.log(err)
                }
                else
                {
                    console.log('successfully deleted file')
                }
            })
        }
    }
})