/*Given an array of integers, remove the smallest value. 
Do not mutate the original array/list. If there are multiple 
elements with the same value, remove the one with a lower index.
If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left. */

function removeSmallest(list) {
  let result = [];
  for (i = 0; i < list.length; i++) {
    if (list.slice(i + 1, list.length).every(act => list[i] <= act)) {
      result = [...list.slice(0, i), ...list.slice(i + 1, list.length)];
      break;
    }
  }
  return result;
}
