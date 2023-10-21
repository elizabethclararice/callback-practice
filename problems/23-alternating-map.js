// this function returns a new array containing the results of passing elements from an original array
// into the two provided callbacks in an alternating fashion.


let alternatingMap = function(arr, cb1, cb2) {
    let res = [];

    for (let i = 0; i < arr.length; i += 2) {
        let evalA = cb1(arr[i]);
        let evalB = cb2(arr[i + 1]);

        res.push(evalA);

        if (!isNaN(evalB)) {
            res.push(evalB);
        }
    }

    return res;
};

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]



// mocha tests
module.exports = alternatingMap;
