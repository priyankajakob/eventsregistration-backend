const validator = require('validator')

console.log(validator.isEmail('abc@gmail.com')) //true

console.log(validator.isEmail('abc@gmail.com')) //false