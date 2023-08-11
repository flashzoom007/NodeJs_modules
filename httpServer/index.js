const fs = require('fs');
const http = require('http');
const { type } = require('os');

const server = http.createServer ((req, res) => {

  const data = fs.readFileSync(`${__dirname}//UserApi/userapi.json`,'utf-8'); // __dirname = ../httpServer path show
  const objData = JSON.parse(data);

  // console.log(res.url); // check users current page url
  // res.end(`Hello Home Page`)
  if (req.url == '/') {
    res.end (`<h1>Hello Home Page</h1>`);
  } else if (req.url == '/about') {
    res.end (`<h1>Hello About Page</h1>`);
  } else if (req.url == '/userapi') {
    res.writeHead (200, {'Content-Type':'application/json'});
    res.end(objData[2].name);
      // console.log(err);
      // console.log(data);
      // res.end(data); // show all data of api
  } 
  else {
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end (`<h1>404 page not found</h1>`);
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Server run successfull on 5000 server');
});