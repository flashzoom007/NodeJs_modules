const os = require('os');

// check version of bit
console.log('OS Architecture: ' + os.arch());

// check host name od pc 
console.log('OS Name: ' + os.hostname());

// check plateform name 
console.log('Platform Name: ' + os.platform());

// OS Type 
console.log ('OS Type: ' + os.type());

// check Free memory of Ram
// console.log(os.freemem());
// or 
const free_memory =  os.freemem();
// console.log(free_memory);
console.log ('Free Memory:' + `${free_memory/1024/1024/1024}`);

// Total memory of Ram
const total_memory =  os.totalmem();
// console.log(total_memory);
console.log ('Total Memory:' + `${total_memory/1024/1024/1024}`);


