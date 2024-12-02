// 1. pre define methods

// function reverseNum() {
//     const num = 123456789
//     const reversed = num.toString().split('').reverse().join('')
//     console.log(reversed)
// }

// reverseNum()

//2. without predefine

function reverseNum(num) {

    let rem, reversed = 0

    while (num != 0) {
        rem = num % 10
        reversed = reversed * 10 + rem
        num = (num - rem) / 10
    }
    return reversed
}
const n = 123456789
console.log(reverseNum(n))