/*Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above will have 
volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you
 find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m 
and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n 
exists or -1 if there is no such n.

Examples:

findNb(1071225) --> 45
findNb(91716553919377) --> -1 */

function findNb(m) {
  //n tiene que ser, por hipotesis mayor o igual a 1 y menor o igual a la raiz cubica de m -->  1 <= n <= m
  var limit = Math.round(Math.cbrt(m - 1));
  var count = 0;
  var result = -1;

  for (i = limit; i >= 1; i--) {
    count = 0;

    for (j = i; j >= 1; j--) {
      count = count + Math.pow(j, 3);
      //aca podemos ahorrarnos tiempo de computo agregando esta condicion,
      // ya que si la "n" que se esta probando actualmente supera "m" podemos
      // romper y pasar directamente al proximo "n" a probar.
      if (count > m) {
        break;
      }
    }
    if (count === m) {
      return i;
    }
  }
  return -1;
}
