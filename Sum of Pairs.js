/*Given a list of integers and a single sum value, 
return the first two values (parse from the left please) in order of appearance that add up to form the sum. 

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]*/

//sabemos que las posibles distintas iteraciones viene dada por la formula n!/m!(n-m)! con n siendo la cantidad total
//de elementos y n el numero de subconjuntos que se quiere tomar
const sum_pairs = (array, s) => {
  var seen = {};
  for (var i = 0; i < array.length; ++i) {
    if (seen[s - array[i]]) return [s - array[i], array[i]];
    seen[array[i]] = true;
  }
};
