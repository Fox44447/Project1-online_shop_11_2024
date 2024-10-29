'use strict';

const values = []; // Array to store all values

for (let i = 1; i <= 10; i++) {
  let value = prompt(
    `Enter the $ amount you wish to make your shopping order for (${i}/10)`
  );
  // Validate input
  if (isNaN(value) || value === '' || Number(value) <= 0) {
    alert("Don't cheat with string text - enter only numerical values! 🧏🏻‍♂️");
    i--; // Decrement i to prompt for the same order
    continue; // Skip to the next iteration
  }
  // I am going to store the the value here
  values.push(Number(value));
}

const totalAmount = values.reduce((sum, amount) => sum + amount, 0);
const mainPurchaseAmount = 80; // Minimum spend per order
const discountThreshold = 800; // Minimum total amount for discount

if (values.length >= 10 && totalAmount > discountThreshold) {
  alert(
    `Congratulations! You have been granted 15% discount on your next shop due to your loyalty and meeting the discount requirements 🙂🎁`
  );
} else {
  //Calculate how much more is needed to reach the discount threshold
  const amountNeeded = discountThreshold - totalAmount;
  const ordersNeeded = Math.ceil(amountNeeded / mainPurchaseAmount);

  alert(
    `${ordersNeeded} orders more for at least ${mainPurchaseAmount} and you will be in for our glamorous discount`
  );
}

// BUG FIXME

// My QA Senior SME has reported that if you make a transaction X for 1 Million and the rest for < 80- than the program will calculate it so that the discount is applied.
// This case is against the assumptions & principles
