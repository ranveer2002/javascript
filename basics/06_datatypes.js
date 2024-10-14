/* Primitive Data Types */

let x  = Number("2");
let y = String(2);
let z = Boolean(1) 
let a =  null , b=  undefined ;
const BigIntValue = 3 * 10e8;
const id = Symbol('123'); // type symbol
// Number
// String
// null
// undefined
// Boolean
// Symbol
// BigInt


/* Non - Primitive Or Reference Type */

let arr = [] ; 
let obj = {} ; 
 let fun = function () {
console.log("asdf")
 }
fun();
// array
// object
// function



/* Typeof operator */

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);
console.log(typeof b);
console.log(typeof id);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof fun);