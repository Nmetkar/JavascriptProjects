a = 10;
b = 20;
console.log(a);


c = 0;
function NumA(){
    a = 10;
    b = 20;
   c = a+b;
    console.log(c);
}
 NumA();

function NumALet(){
    b =3011;
    console.log(b);
}
NumALet();


function addNum(a,b){
    return a+b
}
sum = addNum(2,4)
console.log(sum)

const Arrow = (a,b)=> a+b
console.log(Arrow(4,5))

function classsssssssssssssssssssssssssssssssssssssssss(){
    console.log("Hello")
}
classsssssssssssssssssssssssssssssssssssssssss()

function texts(name,age){
    console.log("Hello", name, "your age is ", age)
}
texts("neha",25)

function y(){
    console.log("erewrewr")
}
y()

function abc(clas,num){
    console.log("tell me your clas",clas,"your number is ",num)
}
abc("10th",4)

let p =(a,b)=>{
    return a-b
}
console.log(p(4,5))

const addArrow = (a,b)=> a+b 
console.log(addArrow(4,5))

const arrow = (a,b)=> a-b
console.log(addArrow(2,9))

cName = "t.k.v college"
console.log(cName);

age = "25"
console.log(age);

let color = "red"
console.log(color);

color = "blue"
console.log(color);


if(1){
    var ename = "neha"
}
console.log(ename);

num1 = "5"
num2 = 5
if(num1==num2){
    console.log("It will print")
}if(num1===num2){
    console.log("It will not print")
}

obj1 = {
    ename: "neha"
}
console.log(obj1.ename)

car = {
    model: "Q8",
    brand: "Audi",
    color: "White",
    startcar: function() {
        return `${this.model} starts with secret key`
    }

}

console.log(car.color);
console.log(car.startcar())
console.log("**************")
console.log(`${car.color} color is so amazing of ${car.brand}`)