const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

/*eventEmitter.on('tutorial',()=>{
    console.log('tutorial event has occured')

})
//here tutorial is an event
//this is not actually,because there is no tutorial event.So we need to create tutorial
//event

eventEmitter.emit('tutorial');
//this event also occured for parameters too...
*/
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2)

})

eventEmitter.emit('tutorial',2,2)//pass in the arguments

//class can extend event emitter class also

class person extends EventEmitter{
    constructor(name){
        super()
        this._name= name;
    }

    get name()
    {
        return this._name;
    }
}

let nafiul=new person('nafiul')
let mina=new person('mina')
mina.on('name',()=>{
    console.log('her name is '+mina.name)
})
nafiul.on('name',()=>{
    console.log('my name is '+nafiul.name)
})

nafiul.emit('name')//that's why we extend event emitter class
mina.emit('name')
//and mina and nafiul execute syncronusly 
