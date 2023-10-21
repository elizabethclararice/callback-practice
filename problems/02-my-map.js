// this function emulates the built in Array#map method by isolating each element in an array
// with a manual loop, then calls a callback function on each element and returns the transformed
// elements in a result array. this is done as an exercise in the use of callback functions.

let myMap = function(arr, cb) {
    let result = [];

// isolates each element with a manual loop, calls cb on it, and pushes to result array
    for (let i = 0; i < arr.length; i++) {
        let newEl = cb(arr[i]);
        result.push(newEl);
    }

    return result;
};

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]


// mocha tests
module.exports = myMap;
