/*When we attended middle school were asked to simplify mathematical expressions 
like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). 
But tell that to your pc and we'll see! 

Write a function:

simplify(poly)
that takes a string in input, representing a multilinear non-constant 
polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another 
string as output where the same expression has been simplified in the following way ( -> means application of simplify):

All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
"cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab" 

All monomials appears in order of increasing number of variables, e.g.:
"-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz" 

If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
"a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz" 

There is no leading + sign if the first coefficient is positive, e.g.:
"-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y" */

function simplify(poly) {
  let order = poly.match(
    /((-|\+)*[0-9]+[A-Z]+)|((-|\+)*[0-9]+)|((-|\+)*[A-Z]+)/gi
  );
  let h = {};
  let totalNumber = 0;
  let result = "";
  let cont = 0;

  order = order.map(el => {
    let unsorted = el.split("");
    return unsorted.sort((a, b) => a.localeCompare(b)).join("");
  });
  order = order
    .map(el => {
      if (el[0] !== "+" && el[0] !== "-") {
        return `+${el}`;
      } else {
        return el;
      }
    })
    .sort((a, b) => {
      let a1 = a.substring(1, a.length);
      let b1 = b.substring(1, b.length);

      return a1.localeCompare(b1);
    });

  order.forEach(el => {
    let f = el.split("");
    let len = f.length;
    let sing, number;
    let letters = "";

    for (let i = 0; i < len; i++) {
      let act = f[i].toLowerCase().charCodeAt();

      if (act >= 97 && act <= 122) {
        letters = el.substring(i, len);
        break;
      } else if (f[i] === "-" || f[i] === "+") {
        sing = f[i];
      } else {
        if (number === undefined) {
          number = Number(`${f[i]}`);
        } else {
          number = Number(`${number}${f[i]}`);
        }
      }
    }

    if (letters !== "") {
      if (h[letters] === undefined) {
        if (number === undefined) {
          h[letters] = [Number(`${sing}1`), letters.length];
        } else {
          h[letters] = [Number(`${sing}${number}`), letters.length];
        }
      } else {
        if (number === undefined) {
          h[letters][0] = h[letters][0] + Number(`${sing}1`);
        } else {
          h[letters][0] = h[letters][0] + Number(`${sing}${number}`);
        }
      }
    } else {
      totalNumber += Number(`${sing}${number}`);
    }
  });

  for (let key in h) {
    let value = h[key];
    if (value[1] >= cont) {
      if (value[0] > 1) {
        result = result + `+${value[0]}${key}`;
      } else if (value[0] < 0) {
        if (value[0] < -1) {
          result = result + `${value[0]}${key}`;
        } else {
          result = result + `-${key}`;
        }
      } else if (value[0] !== 0) {
        result = result + `+${key}`;
      }
    } else {
      if (value[0] > 1) {
        result = `+${value[0]}${key}` + result;
      } else if (value[0] < 0) {
        if (value[0] < -1) {
          result = `${value[0]}${key}` + result;
        } else {
          result = `-${key}` + result;
        }
      } else if (value[0] !== 0) {
        result = `+${key}` + result;
      }
    }
    cont = value[1];
  }
  if (totalNumber > 0) {
    result = `${totalNumber}` + result;
  } else if (totalNumber < 0) {
    result = `-${totalNumber}` + result;
  }

  if (result[0] === "+") {
    result = result.substring(1, result.length);
  }

  return result;
}
