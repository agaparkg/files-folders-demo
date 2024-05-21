// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let sum =0

// using for loop

// const sumArray = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }

//   return arr[0] + sumArray(arr.slice(1));
// };

// console.log(sumArray(arr));

// Factorial

// factorial(5) // 5 * 4 * 3 * 2 * 1

const factorial = (num) => {
  console.log(num);
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1); // 5 * 4 * 3 * 2 * 1
};

console.log(factorial(5)); // 120
