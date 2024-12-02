//rejected promise shows first or after success of all promise
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 reject"), 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 resolve"))
// })


// Promise.all([p1, p2, p3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error(err)
//     })
//output:  p2 reject


//waits for all resolve irrespective of all success
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 reject"), 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 resolve"))
// })


// Promise.allSettled([p1, p2, p3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// output: [
//     { status: 'fulfilled', value: 'p1 success' },
//     { status: 'rejected', reason: 'p2 reject' },
//     { status: 'fulfilled', value: 'p3 resolve' }
// ]

//shows who come first pass or fail not matters
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 reject"), 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p3 reject"), 1000)
// })


// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// output: p3 reject


//which wins come first
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p2 reject"), 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("p3 reject"), 1000)
// })


// Promise.any([p1, p2, p3])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// output: p1 success

//if all setteled promises all promises are failure so it called aggregate error is give list of errors