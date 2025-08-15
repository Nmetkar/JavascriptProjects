
// Task 1: reverse array manually

animals = ["dog", "cat", "rabbit", "parrot"]

animals.reverse();
console.log(animals);

// Task 2:Second highest number

marks = [57,78,45,99,22,56]
highestMarks = 0
secondHighestMarks = 0

for(i=0; i<marks.length; i++){
    if(highestMarks < marks[i]){
        highestMarks = marks[i]
        //secondHighestMarks = marks[i]
    }
}
console.log(highestMarks);
console.log(secondHighestMarks)


// Task 3: Merge Two Arrays Without Duplicates

function mergeWithoutDuplicates(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeWithoutDuplicates([1, 2, 3], [2, 3, 4])); 

// Task 4: Frequency of Each Element in an Array

function frequencyOfElements(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}

console.log(frequencyOfElements([1, 2, 2, 3, 3, 3])); 

//Task 5: Manual Version of includes

function manualIncludes(arr, value) {
  for (let item of arr) {
    if (item === value) return true;
  }
  return false;
}

console.log(manualIncludes([1, 2, 3], 2)); // Output: true
console.log(manualIncludes([1, 2, 3], 4)); // Output: false

//Task 6: Shift Elements Left by One Position

function shiftLeft(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}

console.log(shiftLeft([1, 2, 3, 4])); // Output: [2, 3, 4, 1]

//Task 7: Rotate Array Right by k Steps

function rotateRight(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

//Task 8: Remove Duplicate Elements

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]

//Task 9: Multiplication Table (1 to 10)

function multiplicationTable() {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

console.log(multiplicationTable());

//Task 10: Find the Intersection of Two Arrays

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
