const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () =>
{
    console.log('Please turn off the motor!');
    setTimeout(() =>
    {
        console.log('Please turn off the motor! Its a gentle reminder');
    }, 3000);
});

console.log('the script is running');
myEmitter.emit('WaterFull');
console.log('the script is still running');
myEmitter.emit('WaterFull');