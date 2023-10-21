// this function accepts an array and two callbacks, and returns an array containing elements that
// return true when passed through both callback functions.

let andSelect = function(arr, cb1, cb2) {
    let result = [];

    for (let el of arr) {

        let eval1 = cb1(el);
        let eval2 = cb2(el);

        if (eval1 && eval2) {
            result.push(el);
        }

    }

    return result;
};


let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]



// mocha tests
module.exports = andSelect;
