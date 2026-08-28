console.log("Learning variable js");

let name = "Rahim";
name = "Karim";
name = "Sumi";
 console.log(name);

const age = 21;
// age = 20;
// console.log(age)
const email = "sumi12@gmail.com";
const isAdult = true;

console.log(typeof(name), typeof(age), typeof(isAdult));
console.log("typeof(name) = " + typeof(name));
console.log("typeof(age) = " + typeof(age));
console.log("typeof(email) = " + typeof(email));
console.log("typeof(isAdult) = " + typeof(isAdult));
console.log("If we declare a variable with let we can change the variable value but if we declare a variable with const we cannot change the variable value");

//1. Declaration type
// 🔓 var ➡️ Old, loose, jhamela beshi (use korben na).

// 🔄 let ➡️ Value change kora jay (let x = 1; x = 2;).

// 🔒 const ➡️ Value change kora jay na (const pi = 3.14;).

//Type of variavle:

//  1. Primitive Types (একক মান)

// String ➡️ Text / Lekha ➡️ "Hello"
// Number ➡️ Shonkhya ➡️ 25 ba 9.99
// Boolean ➡️ Ha/Na ➡️ true ba false
// Undefined ➡️ Value dewa hoy ni ➡️ let x;
//  Null ➡️ Intentionally khali ➡️ null
//  BigInt ➡️ Bishal shonkhya ➡️ 100n
//  Symbol ➡️ Unique ID ➡️ Symbol() 

// String: Text ba lekha bojhate single ba double quote-er vethor rakha hoy. (e.g., "Hello")
// Number: Integer (purno shonkhya) abong Decimal (doshomik) shonkhya dharon kore. (e.g., 45, 9.99)
// Boolean: Shudhumatro logical true (shottyo) athoba false (mittha) man dharon kore.
// Undefined: Variable declare korar por jodi kono value assign na kora hoy, tobe tar default man hoy undefined.
// Null: Variable-e manually kono khali ba empty value nirdesh korar jonno eiti byabohar kora hoy.
// BigInt: Normal number limit-er cheye boro kono purno shonkhya dharon korar jonno shonkhyar sheshe n jog kora hoy. (e.g., 9007n)
// Symbol: Kono object property-r jonno ekti unique ba ononno identifier toiri korte byabohar kora hoy.

// 2. Non-Primitive (গ্রুপ মান) 

// Object: Curly braces {} er vethor key-value pair hisebe real-life data store kora hoy. (e.g., {name: "Ali", age: 20})
// Array: Square brackets [] er vethor serial onujayi onugulo data-r list rakha hoy. (e.g., ["Red", "Green", "Blue"])
// Function: JavaScript-e jekono kajer block-keo variable-er vethor value hisebe store kora jay.