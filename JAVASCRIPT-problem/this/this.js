// "use strict"
// // console.log(this)
// function x() {
//     console.log(this)
// }
// x()

//this inside object
//x is method points to an object
// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this)
//     }
// }
// obj.x()

//call apply bind (sharing methods)

// const student = {
//     name: "saniya",
//     printName: function x() {
//         console.log(this.name)
//     }
// }
// student.printName()

// const student1 = {
//     name: "riyan"
// }

// student.printName.call(student1)

//arrow function
//inside arrow function this behave in enclosing lexical context
// const obj2 = {
//     a: 10,
//     x: function () {
//         const y = () => {
//             console.log(this)
//         }
//         y()
//     }
// }
// obj2.x()