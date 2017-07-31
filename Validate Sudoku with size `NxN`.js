/*Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array(in Rust: Vec<Vec<u32>>) , ie:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included) */

var Sudoku = function(data) {
  //   Private methods
  // -------------------------
  let range = data.length;

  const correctSize = () => {
    let j = data.every(el => el.length === range);

    if (Number.isInteger(Math.sqrt(range)) && j && range > 0) return true;

    return false;
  };

  const correctRows = () => {
    let h;
    let result;

    for (let el of data) {
      h = {};
      result = el.some(el => {
        if (h[el] || el < 1 || el > range || !Number.isInteger(el)) {
          return false;
        } else {
          h[el] = true;
          return true;
        }
      });
      if (result === false) {
        return false;
        break;
      }
    }
    return true;
  };

  const correctColumns = () => {
    let h;
    let result;

    for (let i = 0; i < range; i++) {
      h = {};
      for (let j = 0; j < range; j++) {
        let act = data[j][i];
        if (h[act] || act < 1 || act > range) {
          result = false;
          break;
        } else {
          h[act] = true;
        }
      }
      if (result === false) {
        return false;
        break;
      }
    }
    return true;
  };

  const correctSquares = () => {
    let h;
    let result;
    let sq = Math.sqrt(range);
    let x = 0,
      y = 0,
      i,
      j,
      k;

    for (i = 0; i < range; i++) {
      h = {};
      for (j = y * sq; j < y * sq + sq; j++) {
        for (k = x * sq; k < x * sq + sq; k++) {
          let act = data[j][k];
          if (h[act] || act < 1 || act > range) {
            result = false;
            break;
          } else {
            h[act] = true;
          }
        }
      }
      x++;
      if ((i + 1) % sq === 0) {
        x = 0;
        y++;
      }
      if (result === false) {
        return false;
        break;
      }
    }
    return true;
  };

  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      // YOUR SOLUTION
      if (
        correctSize() &&
        correctRows() &&
        correctColumns() &&
        correctSquares()
      )
        return true;

      return false;
    }
  };
};
