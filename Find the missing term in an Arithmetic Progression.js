/*An Arithmetic Progression is defined as one in which there is a constant 
difference between the consecutive terms of a given series of numbers. 
You are provided with consecutive elements of an Arithmetic Progression. 
There is however one hitch: Exactly one term from the original series is missing 
from the set of numbers which have been given to you. The rest of the given 
series is the same as the original AP. Find the missing term.

You have to write the function findMissing (list) , list will always be atleast 3 numbers. 
The missing term will never be the first or last one.

Example :

findMissing([1,5,7,9,11]) == 3*/

let findMissing = list => {
  let dif;
  const first = list[1] - list[0],
    last = list[list.length - 1] - list[list.length - 2];

  if (first === last) {
    dif = first;
  } else if (first < last) {
    dif = first;
    return list[list.length - 1] - dif;
  } else {
    dif = last;
    return list[0] + dif;
  }

  for (let i = 1; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] != dif) return list[i] + dif;
  }
};
