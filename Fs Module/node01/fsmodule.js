const fs = require('fs');

// Copy all data from one file to other file
fs.copyFileSync('index.js','copy_index.js');

// index.js - original file
// copy_index.js - create a new file name = copy_index.js and paste all date of index.js