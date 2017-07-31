/*Given two integers, which can be positive and negative, 
find the sum of all the numbers between including them too and return it. 
If both numbers are equal return a or b.

Note! a and b are not ordered! */

function GetSum(a, b) {
  let result = 0;
  if (a > b) {
    for (i = b; i <= a; i++) {
      result += i;
    }
    return result;
  } else if (a < b) {
    for (i = a; i <= b; i++) {
      result += i;
    }
    return result;
  } else {
    return a;
  }
}
