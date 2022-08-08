const{ odd, even } = require('./var');
const checkNumber = require('./func');
const obj = require('./var');
function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return obj.odd;
    }
    return obj.even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));