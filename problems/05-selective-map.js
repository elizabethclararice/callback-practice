// this exercise in callback functions emulates similar functionality to that of Array#map without the use of the built-in 'map' or 'filter' methods.
// it evaluates elements of an array with one callback function, then tranforms them with another callback based on the result of that evaluation.

let selectiveMap = function(arr, cb1, cb2) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        // evaluate each element with cb1
        let eval = cb1(el);

        // if it's result from cb1 evaluates to true, transform that element with cb2
        if (eval === true) {
            let newEl = cb2(el);
            result.push(newEl)

        // otherwise push the original element
        } else if (eval === false) {
            result.push(el);
        }
    }
    return result;
};


// cb functions:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}


// test cases:

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]



// mocha tests
module.exports = selectiveMap;
