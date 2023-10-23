function reverseSentence(sentence) {
    // split the sentence into an array of words
    const words = sentence.split(' ');

    // reverse the order of the words
    const reversedWords = words.reverse();

    // join the words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    // capitalize the first letter of the new sentence
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return capitalizedSentence;
}

const sentence = 'The quick brown fox jumps over the lazy dog.';
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence); // Output: Dog. Lazy the over jumps fox brown quick the
const data = [
    [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }],
    [{ name: 'Bob', age: 35 }]
];

const names = data.map(array => array.map(obj => obj.name)).flat();

console.log(names); // Output: ['John', 'Jane', 'Bob']
