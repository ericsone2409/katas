/*Write a program that will calculate the number of trailing zeros in a factorial of a given number.

http://mathworld.wolfram.com/Factorial.html

N! = 1 * 2 * 3 * 4 ... N

zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
that has 2 trailing zeros 4790016(00)
Be careful 1000! has length of 2568 digital numbers.*/

function zeros(n) {
  let i = 1;
  let zeros = 0;

  while (n / Math.pow(5, i) > 0) {
    zeros += Math.trunc(n / Math.pow(5, i));
    i++;
  }
  return zeros;
}
