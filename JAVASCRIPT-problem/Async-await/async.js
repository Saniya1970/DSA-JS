const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve");
    }, 10000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve");
    }, 5000)
})
//normal function
// function getData() {
//     p.then((res) => console.log(res))
//     console.log("hello saniya")
// }
// getData()
// const dataPromise = getData()

// dataPromise.then((res) => console.log(res))



//async await wait for promise to be resolve
//async function
async function handlepromise() {
    console.log("developer") //this print before resolving promise
    const val1 = await p1
    console.log("hello saniya 1")
    console.log(val1)

    console.log("developer3")//this will resole with all promise

    const val2 = await p2
    console.log("hello saniya 2")
    console.log(val2)
}
handlepromise()
//if 1 promise timing is 10s and 2 time is 5s then after 10sec all resolve and first will suspended but javascript not wait for any thing
//but 1 time is less 5s and 2 time is 10s then 1resovel at 5s then 2 resolve at 10s
//because in second 2 promise resolve it break then 2 resolve
//but in 1 2 promise save till all promise resolve