
//reverse array manually

animals = ["dog", "cat", "rabbit", "parrot"]

animals.reverse();
console.log(animals);












//Second highest number

marks = [57,78,45,99,22,56]
highestMarks = 0
secondHighestMarks = 0

for(i=0; i<marks.length; i--){
    if(highestMarks < marks[i]){
        highestMarks = marks[i]
        //secondHighestMarks = marks[i]
    }
}
console.log(highestMarks);
//console.log(secondHighestMarks)