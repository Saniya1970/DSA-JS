// function findMinMax(arr) {
//     if (arr.length === 0) {
//         return { min: null, max: null };
//     }

//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return { min, max };
// }

// const numbers = [3, 5, 7, 2, 8, -1, 4];
// const result = findMinMax(numbers);
// console.log(`Min: ${result.min}, Max: ${result.max}`);

function findMinMax(arr) {
    if (arr.length == 0) {
        return { min: null, max: null }
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return { min, max }
}

const numbers = [3, 4, -2, 5, 7, 8, 9]
const result = findMinMax(numbers);
console.log(result)