//1.function declaration or function statement
// function x() {
//     var s = 9
// }

//2.function expression
// const r = function () {
//     let c = 0
// }

//3.first class function
// function square(n) {
//     return n * n
// }

// function displaySquare(fn) {
//     console.log("sqaure is " + fn(5))
// }

// displaySquare(square)


//4.IIFE imedetly invoke function
// (function square(n) {
//     console.log(n * n)
// })(4)

//abilility of function to access function which is lexically another scope is called closures

//5.var give 5 but let const give series of numbers
// for (var i = 0; i < 5; i++) {
//     setTimeout(() =>
//         console.log(i)
//     ), i * 1000
// }

//6.scope output is undefined bec variable already declare in local scope
// let x = 6
// function c() {
//     console.log(x)
//     var x = 8
// }
// c()

//7. spread and rest opeator //out=30
// function multiply(...num) {//rest operator
//     console.log(num[0] * num[1])
// }
// var arr = [5, 6]
// multiply(...arr)//spread operator


//8. out=1 2 [ 4, 5, 6 ] //rest operator should always declare last
// function multiply(a, b, ...num) {//rest operator
//     console.log(a, b, num)
// }

// multiply(1, 2, 4, 5, 6)

//9. arrow function // in normal function argument not pass as parameter it ok

// fn = () => {
//     console.log(arr)
// }
// fn(1, 2, 3)
//but in arrow it gives error //we cannot access in local scope this key in arrow function

