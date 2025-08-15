//Assignment 1

let str1 = "Hello World From Wisdom Sprouts IT Traning Hub";
let str2 = str1.split(" ");
//console.log(str2);

let reverseword = [];

for(let i = 0; i < str2.length; i++){
    let reversed = str2[i].split("").reverse().join("");
    reverseword.push(reversed);
}

let finalsen = reverseword.join(" ");
console.log(finalsen);

//Assignment 2

let sent = "Learning JavaScript is fun! Fun and easy to learn JavaScript."
let sents = sent.toLowerCase();
//console.log(sents);
let consts = sents.replace(/[^a-z0-9\s]/g, "");
//console.log(consts);
let words = consts.split(" ");
console.log(words);

const wordCount = {};

words.forEach(word => {
  if (wordCount[word]) {
    wordCount[word] += 1; // word already exists, increment count
  } else {
    wordCount[word] = 1; // first time seeing word, set count to 1
  }
});

console.log(wordCount);

//Assignment 3

const peoples = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19}
]

const people = peoples.filter(peoples => peoples.age > 18);
console.log(people);

//Assignment 4

const products = [
         { name: "Keyboard", price: 499 },
         { name: "Monitor", price: 8999 },
         { name: "Mouse", price: 299 }
]
products.sort((a, b) => a.price - b.price);
console.log(products);

//Assignment 5

const lines = "Learns JavaScripts in 30 Days!"
const line = lines.toLowerCase();
//console.log(line);

const linerep = line.replace(/[^a-z0-9\s]/g, "");
//console.log(linerep);

linerep.trim();
const relpwith = linerep.replace(/[^a-z0-9\s]/g, '-')
console.log(relpwith);


//Assignment 6

function newsentences(para){
    const grouped = {}

    para.forEach(word =>{

        const len = word.length;

        if(!grouped [len]){
           grouped [len] =[];
        }
        grouped [len].push(word);
    });
    return grouped;
}

const wordlist = ["dog", "apple", "sun", "table", "cat", "pie"];

const result = newsentences(wordlist);
console.log(result);

//Assignment 7

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage
const searchBox = document.getElementById("mySearch");
searchBox.addEventListener("input", debounce(() => {
    console.log("Search triggered");
}, 3000));


//Assignment 8

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; // return primitive values directly
    }
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }
    const copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

// Example usage
const obj = {
    name: "John",
    address: { city: "NYC" },
    coords: { lat: 42.7128, lng: -74.006 }
};

const newObj = deepCopy(obj);
newObj.address.city = "LA";

console.log(obj.address.city); // "NYC"
console.log(newObj.address.city); // "LA"

//Assignment 9

function runTask(name) {
    return new Promise((resolve) => {
        const delay = Math.random() * 1500 + 500; // between 0.5s and 2s
        setTimeout(() => {
            console.log(`Task ${name} completed`);
            resolve();
        }, delay);
    });
}

async function runSequentialTasks() {
    await runTask("A");
    await runTask("B");
    await runTask("C");
    console.log("All tasks completed");
}

runSequentialTasks();


//Assignment 10

function evaluateExpression(expr) {
    return Function(`"use strict"; return (${expr})`)();
}

// Example usage
let expression = "5 + 3 * 10 / 4 - 2 / 3 * 2 - 1 + 2 * 5";
console.log(evaluateExpression(expression)); // 11
