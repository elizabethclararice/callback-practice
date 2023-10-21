// this function is fizzBuzz, but with the return values of callbacks.
// it returns an array containing elements that result in true when passed through one of the callbacks, but not both.

let xorSelect = function(arr, cb1, cb2) {
    let res = [];

    for (el of arr) {
        // check each el with each callback and save the evals
        let eval1 = cb1(el);
        let eval2 = cb2(el);

        // if cb1 returns true and cb2 returns false, push
        if (eval1 && !eval2) {
            res.push(el);
        // if cb1 returns false and cb2 returns true, push
        } else if (!eval1 && eval2) {
            res.push(el);
        }
    }

    return res;
};


let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]



// mocha tests
module.exports = xorSelect;
