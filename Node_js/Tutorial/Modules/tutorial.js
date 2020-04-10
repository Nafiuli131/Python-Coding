//node module//

const sum=(num1,num2)=>num1+num2;//we want to sum this ,and get the result into the app.js
//but it's not possible because we cannot get this file in app.js.Then we need to use 
//module

const pi=3.14;
class Somemathobject{
    constructor()
    {
        console.log()
    }
}
/*module.exports.sum=sum;//then we need to link it the app.js by using path 
//we can exports lots of mudules also in node js
module.exports.pi=pi;
module.exports.Somemathobject=Somemathobject;
//here we can exports all this file in a same manner.*/

module.exports ={sum:sum,pi:pi,Somemathobject:Somemathobject}
