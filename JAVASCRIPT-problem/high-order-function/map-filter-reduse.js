// map
// const arr = [1, 2, 3, 4]

// // const output = arr.map(function double(x) {
// //     return x * 2
// // })

// const output = arr.map((x) => x.toString(2))

// console.log(output)

// const output = arr.map((x, i) => x.toString(2))
// console.log(output)
//--------------------------------------------------------------------------------
//filter
// const arr = [3, 4, 5, 6, 7, 8, 9]

// function isodd(x) {
//     return x % 2
// }
// const output = arr.filter(isodd)
// const output = arr.filter((x) => x > 7)
// console.log(output)

// const output = arr.filter((x) => x % 2 == 0)
// console.log(output)
//--------------------------------------------------------------------------------------------
//reduce
// const arr = [1, 2, 3, 4, 5]


// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr
//     return acc
// }, 0)

// console.log(output)



// const arr1 = [2, 5, 3, 7, 8]
// const result = arr1.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr
//     }
//     return max
// }, 0)

// const result = arr.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr
//     }
//     return acc
// }, 0)

// console.log(result)

//--------------------------------------------------------------------------------
//(pollyfil means creating that functions) map


//Array.map(num,i,arr)=>  this is callback that why we take cb
// Array.prototype.myMap = function (cb) {
//     let out = []
//     for (let i = 0; i < this.length; i++) {
//         out.push(cb(this[i], i, this))
//     }
//     return out
// }

// const arr = [1, 2, 3, 4]

// const res = arr.myMap((x, i, arr) => {
//     return x * 3
// })
// console.log(res)

//pollyfil for filter
// Array.prototype.myFilter = function (cb) {
//     let out = []
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this))
//             out.push(this[i])
//     }
//     return out
// }

// const res = arr.myFilter((x, i, arr) => x % 2 == 0)
// console.log(res)

//------------------------------------------------------------------------------------
//reduce(num,i,arr)=>{},initial
// Array.prototype.myReduce = function (cb, initialvalue) {
//     var accumulator = initialvalue
//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator
// }

// const res = arr.myReduce((acc, curr) => {
//     acc = acc + curr
//     return acc
// }, 0)

// console.log(res)

//*************************************************************************************************/

//Q1how map is behave and foreach not have result array so have to give another array
//we can chain map
// const arr = [1, 2, 3, 4, 5]

// const res = arr.forEach((x, i) => { arr[i] = x + 2 })
// console.log(arr)
//*************************************************************************************************/
//print name of students in capital letter
// let students = [
//     { name: "saniya", marks: 88 },
//     { name: "riyan", marks: 65 },
//     { name: "jay", marks: 34 },
//     { name: "sofi", marks: 40 }
// ]
//1.uppercase student name

// const res = students.map((x) => x.name.toUpperCase())
// console.log(res)

//2.marks greter than 60
// const res = students.filter((x) => x.marks > 60)
// console.log(res)

//3.sum of all students marks

// const res = students.reduce((acc, curr) => acc + curr.marks, 0)
// console.log(res)

//4.name of students marks greater than 60

// const res = students.filter((x) => x.marks > 60).map((x) => x.name)
// console.log(res)

//5.return total marks with  grater than 60  marks greter than 60 and which less increase by 20

// const res = students.map((x) => {
//     if (x.marks < 60) {
//         x.marks += 20
//     }
//     return x
// })
//     .filter((x) => x.marks > 60)
//     .reduce((acc, curr) => acc = acc + curr.marks, 0)

// console.log(res)