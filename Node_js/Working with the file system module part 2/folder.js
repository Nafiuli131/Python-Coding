//create a folder and having file in that folder
const fs=require('fs')
fs.mkdir('learn',(err)=>{//learn is the name of the folder we want to create
    if(err)
    {
        console.log(err)
    }
    else{
        fs.writeFile('./learn/example.txt','123 data',(err)=>{
            if(err)
            {
                console.log(err)
            }
            else{
                console.log('file created successfully')
            }
        })
    }
})