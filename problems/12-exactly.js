// this function accepts an array, a number, and a callback as arguments. it returns a boolean indicating
// whether or not there are exactly `num` elements of the array that return true when passed into the callback.

let exactly = function(arr, num, cb) {

    let passCounter = 0;

    for (let el of arr) {
        let eval = cb(el);
        if (eval) {
            passCounter++;
        }
    }

    if (passCounter === num) {
        return true;
    }

    return false;
};


let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true



// mocha tests
module.exports = exactly;
