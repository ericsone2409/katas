/*Write a function that accepts a square matrix (n x n 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases: A 1x1 matrix |a|
 has determinant a. A 2x2 matrix [[a, b], [c, d]] or

|a b|
|c d|

has determinant ad - bc.*/

const determinant = m => {
  let pilot = m[0];
  let result = 0;
  if (pilot.length === 1) return pilot[0];
  if (pilot.length === 2) return det2(m);

  for (let i = 0; i < pilot.length; i++) {
    let newM = getMinor(i, m);
    result += Math.pow(-1, i) * pilot[i] * determinant(newM);
  }
  return result;
};
const det2 = a => {
  return a[0][0] * a[1][1] - a[0][1] * a[1][0];
};
const getMinor = (indice, m) => {
  let newM = m.slice(1, m.length);
  newM = newM.map(el => el.filter((el, i) => i !== indice));
  return newM;
};
