//Write a function printSquare(n) that prints a square of nxn asterisks

n = 5;


// Task 1: Print a square of Asterisks
for(i=1; i<=n; i++){
        a = ''
    for(j=1; j<=n; j++){
        a += ' *'
    }
    console.log(a)
}


// Task 2: Print right angle tringle

for(i=1; i<=n; i++){
    a = ''
    for(j=1; j<=i; j++){
        a += ' *'
    }
    console.log(a)
}

// Task 3: Print Inverted Triangle
function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        console.log('* '.repeat(i));
    }
}
console.log("Inverted Triangle:");
printInvertedTriangle(5);



// Task 4: Print Pyramid
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '* '.repeat(i);
        console.log(spaces + stars);
    }
}
console.log("\nPyramid:");
printPyramid(5);



// Task 5: Print Diamond
function printDiamond(n) {
    // Upper half
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '* '.repeat(i);
        console.log(spaces + stars);
    }
    // Lower half
    for (let i = n - 1; i >= 1; i--) {
        let spaces = ' '.repeat(n - i);
        let stars = '* '.repeat(i);
        console.log(spaces + stars);
    }
}
console.log("\nDiamond:");
printDiamond(5);


// Task 6: Number Pyramid
function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let numbers = (i.toString() + ' ').repeat(i);
        console.log(spaces + numbers);
    }
}
console.log("\nNumber Pyramid:");
printNumberPyramid(6);


// Task 7: Pascal's Triangle
function printPascalTriangle(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
            process.stdout.write(arr[i][j] + " ");
        }
        console.log();
    }
}
console.log("Pascal's Triangle:");
printPascalTriangle(5);


// Task 8: Hollow Square
function printHollowSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}
console.log("\nHollow Square:");
printHollowSquare(5);


// Task 9: Hourglass Pattern
function printHourglass(n) {
    for (let i = n; i >= 1; i--) {
        let spaces = " ".repeat(n - i);
        let stars = "* ".repeat(i);
        console.log(spaces + stars);
    }
    for (let i = 2; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "* ".repeat(i);
        console.log(spaces + stars);
    }
}
console.log("\nHourglass:");
printHourglass(6);


// Task 10: Zig-Zag Pattern
function printZigZag(n) {
    let totalCols = n * 3 - 2;
    for (let row = 1; row <= 3; row++) {
        let line = "";
        for (let col = 1; col <= totalCols; col++) {
            if (
                (row + col) % 4 === 0 ||
                (row === 2 && col % 4 === 0)
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}
console.log("\nZig-Zag:");
printZigZag(5);










