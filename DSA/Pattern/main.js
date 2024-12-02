// function pattern1(n) {
//     for (let row = 1; row <= n; row++) {
//         let stars = ""; // Initialize an empty string for each row
//         for (let col = 1; col <= n; col++) {
//             stars += "* "; // Add stars to the string
//         }
//         console.log(stars); // Print the complete row of stars
//     }
// }

// pattern1(5);  // Directly calling the function
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// function pattern2(n) {
//     for (let row = 1; row <= n; row++) {
//         let star = ""
//         for (let col = 1; col <= row; col++) {
//             star += "* "
//         }
//         console.log(star)
//     }
// }

// pattern2(5)
// *
// * *
// * * *
// * * * *
// * * * * *

// function pattern3(n) {
//     for (let row = 1; row <= n; row++) {
//         let star = ""
//         for (let col = 1; col <= n - row + 1; col++) {
//             star += "* "
//         }
//         console.log(star)
//     }
// }

// pattern3(5)
// * * * * *
// * * * *
// * * *
// * *
// *

// function diamondPattern4(n) {
//     // Upper part of the diamond
//     for (let i = 1; i <= n; i++) {
//         let row = " ".repeat(n - i) + "* ".repeat(i);
//         console.log(row);
//     }

//     // Lower part of the diamond
//     for (let i = n - 1; i >= 1; i--) {
//         let row = " ".repeat(n - i) + "* ".repeat(i);
//         console.log(row);
//     }
// }

// diamondPattern(5);


// function diamondPattern5(n) {

//     for (let i = n; i >= 1; i--) {
//         let row = " ".repeat(n - i) + "* ".repeat(i);
//         console.log(row);
//     }


//     for (let i = 1; i <= n; i++) {
//         let row = " ".repeat(n - i) + "* ".repeat(i);
//         console.log(row);
//     }
// }
// diamondPattern(5);

// function pattern6(n) {
//     for (let row = 1; row <= n; row++) {
//         let num = ""
//         for (let col = 1; col <= row; col++) {
//             num += row + " "
//         }
//         console.log(num)
//     }
// }
// pattern6(5)
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// function pattern7(n) {
//     for (let row = 1; row <= n; row++) {
//         let number = ""
//         for (let col = 1; col <= row; col++) {
//             number += col + " "
//         }
//         console.log(number)
//     }
// }
// pattern7(5)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


// function invertedPyramid8(n) {
//     for (let i = n; i >= 1; i--) {
//         let spaces = " ".repeat(n - i); // Leading spaces
//         let stars = "*".repeat(2 * i - 1); // Odd number of stars
//         console.log(spaces + stars); // Concatenating spaces and stars
//     }
// }

// invertedPyramid8(5);

// *********
//  *******
//   *****
//    ***
//     *

// function pattern9(n) {
//     let num = 1
//     for (let i = 1; i <= n; i++) {
//         let number = ""
//         for (let j = 1; j <= i; j++) {
//             number += num + " "
//             num++
//         }
//         console.log(number);
//     }
// }
// pattern9(5)

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// function numberDiamond(n) {
//     for (let i = 1; i <= n; i++) {  // Loop through each row
//         let spaces = " ".repeat(n - i); // Leading spaces for centering
//         let row = ""; // Initialize an empty string for the current row

//         // Count down from the current row number to 1
//         for (let j = i; j >= 1; j--) {
//             row += j + " "; // Append the number to the row string
//         }

//         // Count up from 2 to the current row number
//         for (let j = 2; j <= i; j++) {
//             row += j + " "; // Append the number to the row string
//         }

//         console.log(spaces + row.trim()); // Print the row with spaces (remove trailing space)
//     }
// }

// numberDiamond(5); // Call the function with n = 5

