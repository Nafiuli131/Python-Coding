//it alows to create file,read files and so on

const fs=require('fs');
//create a file

fs.writeFile('example.txt',"Hey I'm Nafiul here",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else 
    {
        console.log('file successfully created')

        fs.readFile('example.txt','utf8',(err,file)=>{//this is the code for reading this file and utf8 is a encoding type

            if(err)
            
                console.log(err)

            
            else
            
                console.log(file)
            
        } )

    }

})
//