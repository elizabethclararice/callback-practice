// this function accepts an array and an optional callback as arguments. it returns the smallest value in the array if
// no callback is passed in, and if a callback is passed in, it returns the result of the smallest number being passed through the callback.

let minValueCallback = function(arr, cb) {

    let smallestVal = arr[0];

    for (let val of arr) {
        if (val < smallestVal) {
            smallestVal = val;
        }
    }

    if (cb === undefined) {
        return smallestVal;
    } else {
        let res = cb(smallestVal);
        return res;
    }
};

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3


// mocha tests
module.exports = minValueCallback;
