/*readin module promt the user as well as get user input */

//now crating readline module
const readline=require('readline')
//now create a interface of the readline by using the create interface method
const rl=readline.createInterface({input : process.stdin,
                         output :process.stdout})
//process is an object and stdin for iput screen
//now add two numbers
let num1=Math.floor((Math.random() * 10));
let num2=Math.floor((Math.random() * 10));
let answer=num1+num2;

rl.question('What is $ { num1 } + $ { num2 }?',
(userInput)=>{
    //console.log(userInput);
    if(userInput.trim()!=answer)
    {
        rl.close
    }
    else{
        rl.setPrompt('Incorrect try again')
        rl.prompt();
    }
    //setpromt is basically taking an argument from the promt and then response

})
//now we want to close the interface

//handle the event

rl.on('close',()=>{
    console.log('correct')
})