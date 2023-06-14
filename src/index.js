function translate(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newWord = "";

    if (Number.isInteger(word) === true) {
        throw new Error("input must not be an integer");
    };
    
    if (word.includes(' ')) {
        throw new Error("input must be one word")
    };

    if (vowels.indexOf(word[0]) > -1) {
        newWord = word + "way";
        return newWord;
    } else {
        let firstMatch = word.match(/[aeiou]/g) || 0;
        let vowel = word.indexOf(firstMatch[0]);
        newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
        return newWord;
    }
}

exports.translate = translate;