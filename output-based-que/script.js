/*1.{} creates block scope so only print inside outside error*/
// {
//     let a=1
//     let b=2
//memory execution phase
//    console.log(a)
//    console.log(b)
// }
// console.log(a)     ///code execution phase
// console.log(b)

// /*2.name is variable which predefine in browser so it cannot give ans*/
// console.log(name)
// var name='saniya'

// /*3.only x print || type module gives strict mode*/
// function foo() {
//     x = 10
//     let a = 1
//     var b = 2
//     const c = 3
//     function sanu() {
//         console.log(sanu)
//     }
//     sanu()
// }
// foo()

/*4. CONSOLE then error*/
// foo()
// var foo = 20
// function foo() {
//     console.log('calling foo');
// }
// foo()

/*5. setTimeout executes lastly*/
// var is functional scope variable

//var keyword hoisting
//memory phase have all value undefine
//let,const is temporal dead zone

//hoisting
//functions run before also and x will undefine
// getName()
// console.log(x)
// var x = 2
// function getName() {
//     console.log("saniya developer");
// }

// var x = 1
// a()
// b()
// console.log(x)
// function a() {
//     var x = 10
//     console.log(x);
// }

// function b() {
//     var x = 100
//     console.log(100)
// }

//closures
// function outest() {
//     function outer(b) {
//         var c = 20

//         var x = 10;
//         function inner() {
//             console.log(x, b, c)
//         }

//         return inner
//     }
//     return outer
// }
// var close = outest()("hi")
// close()


//closures can use in data hiding

// class Counter {
//     constructor() {
//         var count = 0
//         this.increment = function () {
//             count++
//             console.log(count)
//         }
//         this.decrement = function () {
//             count--
//             console.log(count)
//         }

//     }
// }

// var value = new Counter()
// value.increment()
// value.increment()
// value.decrement()

// let b = 100
// const c = 35
// var a = 45 //global scope
// {
//     var a = 1
//     let b = 2  //block scope
//     const c = 3
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

//illegal shadowing
// var x = 20
// {
//     const x = 56
//     console.log(x)
// }

// let z = 9
// function g() {
//     var z = 8
//     console.log(z)
// }
// g()

//closures in settimeout function
// function time() {
//     var i = 1
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
//     console.log("hello saniya")
// }
// time()

