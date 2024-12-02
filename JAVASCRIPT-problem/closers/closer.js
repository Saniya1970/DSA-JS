//closures                         //global scope
// function outest() {
//     function outer(b) {
//         var c = 20               //outer scope

//         var x = 10;
//         function inner() {
//             console.log(x, b, c)     //local scope
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


// closures in setimeout function
// function time() {
//     var i = 1
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
//     console.log("hello saniya")
// }
// time()

//num is 6 base
// function createbase(num) {
//     return function (inner) {
//         console.log(num + inner)
//     }

// }
// let add = createbase(6)
// add(10)
// add(20)

//time optimization
// function find() {
//     let a = []
//     for (let i = 0; i < 100000; i++) {
//         a[i] = i * i
//     }

//     return function (index) {
//         console.log(a[index])
//     }
// }

// const closure = find()
// console.time("6")
// closure(6)
// console.timeEnd("6")
// console.time("50")
// closure(50)
// console.timeEnd("50")

//we can acess var inside function
// for (var i = 0; i < 3; i++) {
//     function inner(i) {
//         setTimeout(function log() {
//             console.log(i)
//         }, i * 1000)
//     }
//     inner(i)
// }

//closures create private counter
// function counter() {
//     var _counter = 0
//     function add(increment) {
//         _counter += increment
//     }
//     function retrive() {
//         return "counter " + _counter
//     }

//     return {
//         add,
//         retrive,
//     };
// }

// const c = counter()
// c.add(5)
// c.add(10)
// console.log(c.retrive())

//module pattern private methods cannot access ouside public can

// var module = (function () {
//     function privateMethod() {

//     }

//     return {
//         publicMethod: function () {

//         }
//     }



// })()
// module.publicMethod()
// module.privateMethod()

//make this run only once
let view;
function like() {
    let called = 0

    return function () {
        if (called > 0) {
            console.log("already called")
        }
        else {
            view = "hi sanu"
            console.log(view)
            called++
        }
    }

}

let x = like()
x()
x()
x()

