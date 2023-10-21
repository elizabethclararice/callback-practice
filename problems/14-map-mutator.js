// this function accepts an array and a callback as arguments. it passes each element and its index into the callback and
// uses the result to overwrite the elements of the original array, mutating the array.

let mapMutator = function(arr, cb) {

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let mutated = cb(el, i);
        arr[i] = mutated;
    }

    return arr;
};

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]


// mocha tests
module.exports = mapMutator;
