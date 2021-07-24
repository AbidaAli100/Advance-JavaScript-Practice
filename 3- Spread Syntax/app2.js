//from mdn website
// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// // expected output: 6

// console.log(sum.apply(null, numbers));
// // // expected output: 6


function Sum(a, b, c) {
    return a + b + c;
}
const Numbers = [2, 3, 4];
console.log(Sum(...Numbers));

//expected output 9

// console.log(Sum.apply(null, Numbers));