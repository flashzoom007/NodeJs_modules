const { parse } = require("path");

const bioData = {
    name: 'Harsh',
    address: 'Chikhli',
    channel: 'thapa'
};

console.log (bioData.name); // Harsh
console.log (bioData.address); // Chikhli
console.log (bioData); // { name: 'Harsh', address: 'Chikhli', channel: 'thapa' }

// convert data into JSON 
const jData = JSON.stringify(bioData);
console.log(jData); // {"name":"Harsh","address":"Chikhli","channel":"thapa"} -> Json Format

const parseData = JSON.parse(jData);
console.log(parseData); // { name: 'Harsh', address: 'Chikhli', channel: 'thapa' } -> Object format (Original Data)