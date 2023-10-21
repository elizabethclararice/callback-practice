// this function runs each element of an array through a callback, returning true if the number of elements that
// evaluate to true is less than or equal to a given 'max' number, and false otherwise


let atMost = function(arr, max, cb) {
    let counter = 0;

    for (let item of arr) {
        let eval = cb(item)

        if (eval) {
            counter++
        }
    }

    if (counter <= max) {
        return true;
    }

    return false;
};


let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false



// mocha tests
module.exports = atMost;
