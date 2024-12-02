// inversion control

// cartOrder(cart, function (orderId) {
//     proceedPayment(orderId)
// })

//promise


const cart = ["shoes", "pant", "kurta"]

creatOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId
    })
    .then(function (orderId) {
        return proceedPayment(orderId)
    })
    .then(function (paymentInfo) {
        return console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message)
    })


function creatOrder(cart) {

    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("not valid")
            reject(err)
        }

        const orderId = "1234"
        if (orderId) {
            resolve(orderId)
        }
    })
    return pr
}



function validateCart(cart) {
    return true
}

function proceedPayment(orderId) {

    return new Promise(function (resolve, reject) {
        resolve("payment succesful")
    })
}

