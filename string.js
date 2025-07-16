str1 = 'Neha'
str2 = 'Manoj'
str3 = 'Metkar'

str4 = str1+str2+str3
console.log(str4);

str5 = str1.concat(' ',str2, ' ',str3);
console.log(str5);

name1 = "puki"
console.log(`Hello ${name1}`) //Template literal

console.log(str5.length);

console.log(str3[4]);

console.log(str3.charAt(1));

strCapital = str5.toUpperCase()

strSmall = str5.toLowerCase()

console.log("CapitalCase", strCapital, "LowerCase", strSmall)

console.log(`Capital Case ${strCapital}          Lower Case ${strSmall}` )


//indexof()

 str0 = "Sneha"

console.log('Sneha')
console.log(str0.indexOf('Sneha'))


//lastIndexof()

n2 = "Every day is a new chance to do something new !!!"

console.log(n2.lastIndexOf('new'))

//includes()

console.log(n2.includes('new'))

//startswith()

console.log(n2.startsWith('Every'))

//endsWith()

console.log(n2.endsWith('!'))
console.log(n2.endsWith('.'))

//.slice(), substring(), substr()

console.log(n2.slice(0,5))  //1st is index and 2nd is length of string
console.log(n2.substring(6)) //it will start after 6th index
console.log(n2.substr(6)) //same

// . trim(), trimStart(), trimEnd()

str8 = '     HELLO  '
console.log(str8.length)
console.log(str8.trim().length)
console.log(str8.trimStart())
console.log(str8.trimEnd())

//replace

str9 = "Neha Mohit Bende"

console.log()

const strr = "Everyday is a new chance to do something new";

let longest = strr
.split(" ")
.sort((a, b) => b.length - a.length)[0];

console.log("Longest word:", longest);

// arrSTR = startTransition.split(" ") = ["I","am","always","good","in","everything"]






//anagram

s1 = 'slient'
s2 = 'listen'
if(s1.length === s2.length){
    console.log(s1.split('').sort())
    ==
    console.log(s2.split('').sort())
}