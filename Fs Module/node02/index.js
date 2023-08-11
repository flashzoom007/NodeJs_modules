const fs = require('fs');

// fs.writeFile('read.txt', 'My new file created', (err) => {
//   console.log('File Add Succesfully');
//   console.log(err);
// });

// fs.appendFile('read.txt', ' We have add new code', (err) => {
//   console.log('Update date Succesfully');
//   console.log(err);
// });


// read the data getdata = console.log = response = data anything 
fs.readFile('read.txt','utf-8', (err,res) => {
    console.log(res);
    console.log(err);
})