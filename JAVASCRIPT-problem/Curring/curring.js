//curring means function inside another function
//f(a)(b)

// function f(a) {
//     return function (b) {
//         return `${a} ${b}`
//     }
// }

// console.log(f(5)(6))

//Q1 add
// function f(a) {
//     return function (b) {
//         return function (c) {
//             console.log(a + b + c)
//         }
//     }
// }
// f(2)(6)(1)

//Q2
// function f(opr) {
//     return function (a) {
//         return function (b) {
//             if (opr === "sum") return a + b
//             else if (opr === "substract") return a - b
//             else if (opr === "multiply") return a * b
//             else if (opr === "divide") return a / b
//             else return "invalid opr"
//         }
//     }
// }
// //below use of curring make once apply anywere
// const sub = f("substract")

// console.log(f("sum")(6)(1))
// console.log(sub(6)(1))

//Q3  infinite curring
// function add(a) {
//     return function (b) {
//         if (b) return add(a + b)
//         return a
//     }
// }

// console.log(add(3)(5)(6)(6)())

//Q4 partial application this is not curring
// function sum(a) {
//     return function (b, c) {
//         console.log(a + b + c)
//     }
// }

// sum(2)(3, 4)

//Q5 DOM manupulation

// function updateElementTextId(id) {
//     return function (content) {
//         document.querySelector("#" + id).textContent = content
//     }
// }

// const updateText = updateElementTextId("name")
// updateText("saniya is MERN stack developer")

//Q6 curring implementation
//f(a,b,c) to f(a)(b)(c)

// function curry(func) {
//     return function curriedFun(...args) {
//         if (args.length >= func.length) {
//             return { ...args }
//         } else {
//             return function (...next) {
//                 return curriedFun(...args, ...next)
//             }
//         }
//     }
// }

// const sum = (a, b, c, d) => a + b + c + d
// const totalSum = curry(sum)
// console.log(totalSum(1)(2)(3)(4))