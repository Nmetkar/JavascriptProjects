// 1. Count the number of vowels in a given string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));


// 2. Check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));


// 3. Extract the first word of a sentence
function getFirstWord(sentence) {
    return sentence.split(' ')[0];
}
console.log(getFirstWord("Hello world from JavaScript")); 


// 4. Replace all spaces in a string with hyphens
function replaceSpacesWithHyphens(str) {
    return str.replace(/ /g, '-');
}
console.log(replaceSpacesWithHyphens("Hello world from JS"));



// 5. Split a string into an array of words
function splitIntoWords(str) {
    return str.split(' ');
}
console.log(splitIntoWords("Hello world from JS"));



// 6. Convert the first letter of each word to uppercase
function capitalizeFirstLetterEachWord(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeFirstLetterEachWord("hello world from js"));



// 7. Reverse the characters in a string manually
function reverseStringManually(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseStringManually("JavaScript"));



// 8. Count the number of occurrences of a specific character
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacterOccurrences("banana", 'a'));

// 9. Remove all non-alphanumeric characters from a string
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-z0-9]/gi, '');
}
console.log(removeNonAlphanumeric("Hello@# World!! 123"));



// 10. Check if a string starts and ends with the same character
function startsAndEndsWithSameChar(str) {
    if (str.length === 0) return false;
    return str[0].toLowerCase() === str[str.length - 1].toLowerCase();
}
console.log(startsAndEndsWithSameChar("radar"));