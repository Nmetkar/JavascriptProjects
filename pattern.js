//Write a function printSquare(n) that prints a square of nxn asterisks

n = 5;

for(i=1; i<=n; i++){
        a = ''
    for(j=1; j<=n; j++){
        a += ' *'
    }
    console.log(a)
}

for(i=1; i<=n; i++){
    a = ''
    for(j=1; j<=i; j++){
        a += ' *'
    }
    console.log(a)
}

for(i=1; i<=n; i--){
    a = ''
    for(j=1; j<=i; j++){
        a +=' *'
    }
    console.log(a)
}





