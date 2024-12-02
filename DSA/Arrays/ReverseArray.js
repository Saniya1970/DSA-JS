function revArr(arr) {
    let revArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i])
    }
    return revArr
}

const number = [8, 4, 3, 2, 8, 5, 0]
const reversed = revArr(number);

console.log(reversed);

