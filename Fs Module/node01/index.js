const second = require('./second')
const path = require('path');
const { extname } = require('path');

console.log('Hello World2', second);
// console.log(exports, module, __dirname, __filename);

// All code are here Link: https://nodejs.org/api/fs.html
const filename = path.join(__filename);
const basename = path.basename(filename);
const extname1 = path.extname(basename);
 
console.log(`File Name: `+ filename); // Check File Path -> D:\Harsh\Node Js\node01\index.js
console.log(`Basename of a File: `+ basename); // Check Base name or file name -> index.js
console.log(`Extension of a File: `+ extname1); // Check extension Name of file -> .jss