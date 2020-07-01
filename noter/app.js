const validator = require('validator')
const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail('invalid'))
console.log(validator.isEmail('r.dokollari@gmail.com'))
