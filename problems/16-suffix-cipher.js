// this function alters a sentence according to the rules provided by an object containing cipher keys and translator functions.
// it detects if each given word has a certain suffix and translates accordingly, then returns the new sentence.

let suffixCipher = function(snt, obj) {
    let newSnt = [];
    let endings = Object.keys(obj);
    let arr = snt.split(' ');

    // this double loop is used to check each word for each ending, then calls the corresponding functions if a match is found
    for (let word of arr) {
        let newWord;

        for (let ending of endings) {
            if (word.endsWith(ending)) {
                newWord = obj[ending](word);
                break;
            }
        }

        if (!newWord) {
            newWord = word;
        }

        newSnt.push(newWord);
    }

    let res = newSnt.join(' ');
    return res;
};

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL



// mocha tests
module.exports = suffixCipher;
