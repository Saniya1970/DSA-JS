//1. using set()

// const nums=[1,1,2,2,3,3,4,4,5,5];
// const fooSet= new Set(nums);
// const numArray=[...fooSet];
// console.log(numArray);

//2. converting to object

// function removeDuplicate(num) {
//     var x,
//         length = num.length,
//         output = [],
//         obj = {};

//     for (x = 0; x < length; x++) {
//         obj[num[x]] = 0;
//     }

//     for (x in obj) {
//         output.push(Number(x));
//     }

//     return output;
// }

// var mynum = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// var result = removeDuplicate(mynum);

// console.log(mynum);
// console.log(result);

// The function removeDuplicate is designed to remove duplicate elements from an array. Let's break down how it works:

// Code Explanation:
// Initialization:

// length=num.length: Stores the length of the input array num.
// output=[]: Initializes an empty array to store the unique elements.
// obj={}: Initializes an empty object to help with the removal of duplicates.
// First Loop (for(x=0;x<length;x++)):

// Iterates over each element in the array num.
// Adds each element as a property of the object obj with a value of 0.
// Since object properties are unique by their keys, duplicate elements will overwrite the previous ones.
// Second Loop (for(x in obj)):

// Iterates over the keys of the object obj (which correspond to the unique elements of num).
// Pushes each key (which represents a unique element) to the output array.
// Return:

// The function returns the output array, which contains only the unique elements.