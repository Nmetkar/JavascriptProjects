// created array

color = ['red', 'blue', 'pink']
console.log(color)

console.log(color[2]);

// added color

color[3] = 'black'
console.log(color);

// push method----add value at end

color.push('green')
console.log(color)

//pop method---delete value at end

color.pop()
console.log(color);

//unshift method---add value at start

color.unshift('white')
console.log(color);

//shift method-- delete value at start

color.shift()
console.log(color);

//slice method --

//1st
x = color.slice(0,2)
console.log(x);
//2nd
console.log(color.slice(0,3))

//splice method

//y = color.splice(1,0,'yellow')
//console.log(y);

console.log(color.splice(1,0,'yellow'))
console.log(color)


//for of , for in , includes, indexof

a = color.includes('yellow')
console.log(a);

indexNum = color.indexOf('yellow')
console.log(indexNum)

//if else
indcolor = color.indexOf('yellow')
if(indcolor !== -1){
    console.log("you can order")
    console.log(indcolor)
}else{
    console.log("Color is not available")
}

//everytime of will return values
for (x of color){
    console.log(x)
}

//everytime in will return index and we want values also

for (i in color){
    console.log(i)
}

for (i in color){
    console.log(i, color[i])
}