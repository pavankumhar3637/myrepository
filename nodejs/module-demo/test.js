
var test = require('./module1')
var test1 = require('./module2')


console.log("=========Module1================");
console.log(test.addMethod_1(10,20));
console.log(test.subMethod_1(10,6));
console.log(test.mulMethod_1(6,5));

console.log("=========Module2================");
console.log(test1.addMethod_2(10,20));
console.log(test1.subMethod_2(10,6));
console.log(test1.mulMethod_2(6,5));