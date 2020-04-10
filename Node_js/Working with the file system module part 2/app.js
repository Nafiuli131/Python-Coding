//how to work with folders
const fs=require('fs')
fs.mkdir('learn',(err)=>{//learn is the name of the folder we want to create
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('folder created successfully')
    }
})//mkdir is a foder directory
//we can also delete the folder