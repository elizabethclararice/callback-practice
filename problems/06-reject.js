// this exercise in callback functions isolates the 'rejects' of the callback function, whose evaluation returns as false
// and is done without the help of Array#map or Array#filter

let reject = function(arr, cb) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let eval = cb(el);

        if (eval === false) {
            result.push(el);
        }
    }
    return result;
};

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]


// mocha tests
module.exports = reject;
