/*Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
] */

function towerBuilder(n) {
  let floor = n + n - 1,
    build = [];

  for (var i = 1; i <= n; i++) {
    let add = "",
      Nasterics = i + i - 1,
      Nspaces = (floor - Nasterics) / 2;

    add = " ".repeat(Nspaces) + "*".repeat(Nasterics) + " ".repeat(Nspaces);
    build.push(add);
  }

  return build;
}
