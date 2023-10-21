 // this function evaluates the results of two callbacks, with the same value passed into them, and returns the greatest

let greaterCallbackValue = function(val, cb1, cb2) {

    let res1 = cb1(val);
    let res2 = cb2(val);

    if (res1 > res2) {
        return res1;
    } else if (res2 > res1) {
        return res2;
    }

};

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18


// mocha tests
module.exports = greaterCallbackValue;
