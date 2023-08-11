// Built in module 
const os = require('os');

// Below all command is here Link: https://nodejs.org/api/os.html
console.log(os.freemem()) // check free Space
console.log(os.homedir()) // check Home Direcxtory
console.log(os.hostname()) // check Host Name
console.log(os.platform())
// Relese version of OS in nodejs?
// var os = require('os');
console.log(os.platform()); // 'win32'
console.log(os.release()); //'10.8.0'

