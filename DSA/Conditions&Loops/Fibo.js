// function printFibonacciSeries(n) {
//     let a = 0, b = 1, nextTerm;

//     console.log("Fibonacci Series:");

//     for (let i = 1; i <= n; i++) {
//         console.log(a);  // Print the current term
//         nextTerm = a + b; // Calculate the next term
//         a = b;  // Move to the next term
//         b = nextTerm; // Update b to the new term
//     }
// }

// // Get user input for the number of terms
// const userInput = prompt("Enter the number of terms for the Fibonacci series: ");
// const n = parseInt(userInput);

// if (isNaN(n) || n <= 0) {
//     console.log("Please enter a valid positive number.");
// } else {
//     printFibonacciSeries(n);
// }

const userInput = prompt("Enter num");
const n = parseInt(userInput);

function fibo(n) {
    let a = 0, b = 1, nextTerm;
    for (let i = 0; i <= n; i++) {
        console.log(a);
        nextTerm = a + b;
        a = b
        b = nextTerm
    }
}

fibo(n)