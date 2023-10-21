// this function accepts a number and any number of callbacks as arguments, returning the result of passing
// num through all given callbacks, regardless of how many are provided

let chainMap = function(num, ...callbacks) {

    for (let cb of callbacks) {
        num = cb(num);
    }

    return num;
};

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4


// mocha tests
module.exports = chainMap;
