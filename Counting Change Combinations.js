/*Write a function that counts how many different ways you can make change for an amount of money, 
given an array of coin denominations. For example, there are 3 ways
to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1*/

const countChange = (money, coins) => {
  var tail = coins.slice(0), // clone coins, because we're about to modify it
    head = tail.shift(); // grab the first coin out of the purse

  // If money is less than zero, or there are no coins left, this isn't a match
  if (money < 0 || !head) {
    return 0;
  } else if (money === 0) {
    // If the money reached 0, this is a match
    return 1;
  } else {
    // Otherwise, branch
    // The first branch sends the money and a subset of `coins`
    // The second branch send a reduced money, and all the `coins`
    return countChange(money, tail) + countChange(money - head, coins);
  }
};
