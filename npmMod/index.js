// npm init   
// npm i chalk@4.1.2 
// npm i validator

const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.red('Hello world!')); 
// console.log(chalk.blue.underline('Hello world!')); 
// console.log(chalk.blue.underline.inverse('Hello world!')); 
// console.log(chalk.bgGreen.underline('Hello world!')); 

// console.log(chalk.green('Created Succesfully'));
// console.log(chalk.green.inverse('Created Succesfully'));
// console.log(chalk.red.inverse('False'));

// Ans true 
const res = validator.isEmail('Harsh@Patel.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// Ans False 
const emailvalid = validator.isEmail('Harsh@Patel..com');
console.log(emailvalid ? chalk.green.inverse(emailvalid) : chalk.red.inverse(emailvalid));