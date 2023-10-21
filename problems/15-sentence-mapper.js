// this function accepts a sentence and callback as arguments, and returns a new sentence where every word of the
// original sentence becomes the result of passing each word to the callback.

let sentenceMapper = function(sent, cb) {
    let arr = sent.split(' ');
    let newSent = [];

    for (let word of arr) {
        let newWord = cb(word);
        newSent.push(newWord);
    }

    let res = newSent.join(' ');
    return res;
};

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'


// mocha tests
module.exports = sentenceMapper;
