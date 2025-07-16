const num11 = document.querySelector("#num11")
const num22 = document.querySelector("#num22")
const result = document.querySelector("#result")
const addition = document.querySelector("#addition")
const subtract = document.querySelector("#subtract")
const multiply = document.querySelector("#multiply")
const divison = document.querySelector("#divison")


const calculator = {

    addition:function(n1,n2){
        console.log(n1,n2)
        return n1+n2
    },

    subtract:function(){
        return this.n1 - this.n2
    },

    multiply:function(){
        return this.n1 * this.n2
    },

    divison:function(){
        if(this.n2==0){
            return "not divide by 0"
        }else{
        return this.n1/this.n2
        }
    }
}

addition.addEventListener('click', ()=>{
    n1=Number(num11.value)
    n2=Number(num22.value)
    res = calculator.addition(n1,n2)
    result.innerHTML = res

})

subtract.addEventListener('click', ()=>{

     calculator.n1=Number(num1.value)
     calculator.n2 =Number(num2.value)

     res = calculator.subtract();
    result.innerHTML = res;
})

multiply.addEventListener('click' , ()=>{
    calculator.n1 =Number(num1.value)
    calculator.n2 =Number(num2.value)

    res = calculator.multiply();
    result.innerHTML = res;
})

divison.addEventListener('click', ()=>{
    calculator.n1 =Number(num1.value)
    calculator.n2 =Number(num2.value)

    res = calculator.divison();
    result.innerHTML = res;
})



//calculator

const num = document.querySelector("#num")
const num0 = document.querySelector("#num0")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const num3 = document.querySelector("#num3")
const num4 = document.querySelector("#num4")
const num5 = document.querySelector("#num5")
const num6 = document.querySelector("#num6")
const num7 = document.querySelector("#num7")
const num8 = document.querySelector("#num8")
const num9 = document.querySelector("#num9")
const dot = document.querySelector("#dot")
const equal = document.querySelector("#equal")

const res = document.querySelector("#res")
const back = document.querySelector("#back")

const add = document.querySelector("#add")
const sub = document.querySelector("#sub")
const multi = document.querySelector("#multi")
const divs = document.querySelector("#divs")


