/*You need to return a string that displays a diamond shape on the 
screen using asterisk ("*") characters. Please see provided test cases for exact output format.

The shape that will be returned from print method resembles a diamond, 
where the number provided as input represents the number of *’s printed on the middle line. 
The line above and below will be centered and will have 2 less *’s than the middle line. 
This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number). */
function diamond(n) {
  if (n < 3 || n % 2 === 0) {
    return null;
  }
  let diamond = "*".repeat(n) + "\n";
  let pre = "";
  let after = "";
  let steps = (n - 1) / 2;
  let Pasterics = 1;
  let Afasterics = n - 2;
  for (let i = 1; i <= steps; i++) {
    pre =
      pre +
      " ".repeat(Math.floor(n / 2) - (i - 1)) +
      "*".repeat(Pasterics) +
      "\n";
    Pasterics += 2;
    after =
      after +
      " ".repeat(Math.floor(n / 2) - (steps - i)) +
      "*".repeat(Afasterics) +
      "\n";
    Afasterics -= 2;
  }

  return pre + diamond + after;
}
