// 1.only var can access in global scope
// let and const are block scope

// function x() {
//     let a = 3
//     const b = 9
//     var c = 4
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// x()

// function x() {
//     const a = "hi"
//     //  b = "saniya"
//     if (true) {
//         let a = "fish"
//         // let b = "dog"
//         console.log(a)
//         // console.log(b)
//     }
//     console.log(a)
// }
// x()

// 2.illegal shadowing is global var & block let or const allow to block but opposite
// not allowed
// if same type let in global and block scope then allowed

// 3.redeclaration const
// var n
// n=9

// let v
// v=4

// //not allowed const cannot redeclares
// const t
// t=9


// 4.hoisting for functions
// console.log(count)
// var count = 3

// 5.temporal dead zone
// gives error beacause let and const are in temporal dead zone

// x()
// function x() {
//     console.log(x)
//     const x = 9
// }

// but in case of var it gives undefined
// console.log(b)
// var b = 9
