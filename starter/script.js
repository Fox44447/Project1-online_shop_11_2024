// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const y = 25;

if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1995));

// BUG FIXME


//Piece of code to calculate the thermometer amplitude made by myself
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

for (let i = temperatures.length - 1; i >= 0; i--) {
  if (typeof temperatures[i] === 'string') {
    temperatures.splice(i, 1);
  }
}

temperatures.sort((a, b) => a - b);

console.log(temperatures[0] - temperatures[temperatures.length - 1]);
//let sortedArr = temperatures.sort();

console.log(temperatures);
*/

// const = calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     for(let i = 0; i <temps.length; i++) {

//     }
// }

const values = []; // Array to store all values

for (let i = 1; i <= 10; i++) {
  let value = Number(
    prompt(
      `Enter the $ amount you wish to make your shopping order for (${i}/10`
    )
  );
  // I am going to store the the value here
  values.push(value);
}

const client1 = [89, 92, 90, 82, 87, 90];
const client2 = [89, 92, 98, 99, 104, 106, 97, 88, 89, 106, 107];
//const totalAmount = client2.reduce((sum, amount) => sum + amount, 0);
const totalAmount = values.reduce((sum, amount) => sum + amount, 0);

// for (let i = 0; i < 10, i++) {
//     if (client2.length => 10 & client2)
// }

//let client2 = 1;
// while (client2 >= 10) {
//   console.log(client2[i]);
//   client2++;
// }

if ((values.length >= 10) & (totalAmount > 800)) {
  alert(
    `Congratulations! You have been granted 15% discount on your next shop due to your loyalty and meeting the discount requirements 🙂🎁`
  );
} else {
  alert(
    `X orders more for at least 80 and you will be in for our glamorous discount`
  );
}

//alert(console.log(client2));
