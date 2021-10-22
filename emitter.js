const util = require('util');
const events = require('events');
const Person = function(name){
    this.name=name;
}
const p1 = new Person('shravani');
util.inherits(Person,events.EventEmitter);
p1.on('speak', (msg)=>{
    console.log(p1.name+' tells '+msg);
})
p1.emit('speak','emitted an event bro!');