const path = require('path');

console.log(path.dirname('D:/Harsh/React/Node Js/Practical/OS Module/osmod.js'));
console.log(path.extname('D:/Harsh/React/Node Js/Practical/OS Module/osmod.js'));
console.log(path.basename('D:/Harsh/React/Node Js/Practical/OS Module/osmod.js'));

// Give all Data  
console.log(path.parse('D:/Harsh/React/Node Js/Practical/OS Module/osmod.js'));
console.log(path.parse('D:/Harsh/React/Node Js/Practical/OS Module/osmod.js').root);
const myPath = path.parse('D:/Harsh/React/Node Js/Practical/OS Module/osmod.js');
console.log('root: ' + myPath.root);
console.log('dir:' + myPath.dir);
console.log('base:' + myPath.base);
console.log('ext:' + myPath.ext);
console.log('name:' + myPath.name);