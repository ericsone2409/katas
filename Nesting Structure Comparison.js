/*Complete the method (or function in Python) to return true when its argument is an array that has the
 same nesting structure as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

 Return 'true' if and only if 'other' has the same
   nesting structure as 'this'.
   Note: You are given a function isArray(o) that returns
   whether its argument is an array.
*/

Array.prototype.sameStructureAs = function(compare) {
  if (!Array.isArray(compare) || this.length != compare.length) return false;

  const check = element => {
    let result;
    if (!Array.isArray(element)) {
      result = 1;
    } else {
      result = element.map(el => check(el));
    }
    return result;
  };

  let newArray = this.map(el => check(el));
  compare = compare.map(el => check(el));

  return JSON.stringify(newArray) === JSON.stringify(compare);
};
