// this is an exercise in using callback functions. the myForEach function emulates the functionality of
// the built in array method forEach with a manual loop that isolates each element and its corresponding index,
// which can then be fed into a callback function.

let myForEach = function(arr, cb) {
// finds each element and its index in the array to feed to the callback function
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        cb(el, i);
    }
};

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']


// mocha tests
module.exports = myForEach;
