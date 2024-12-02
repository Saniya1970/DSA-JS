// const user = {
//     name: "saniya",
//     age: 24,
//     "hi": true
// }

//for key and value
// for (key in user) {
//     console.log(user[key])//value
//     console.log(key)//key

// }

// // user.name = "developer"
// // delete user.age
// console.log(user["hi"])

//taking property
// const property = "firstName"
// const name = "saniya"
// const age = 23
// const user = {
//     [property]: name  //adding brackets
// }
// console.log(user)


//1.out
// const func = (function (a) {
//     delete a
//     return a
// })(5)
// console.log(func)

//2. { a: 6, v: 0 }  later added a is consider
const stu = {
    a: 5,
    v: 0,
    a: 6
}

console.log(stu)