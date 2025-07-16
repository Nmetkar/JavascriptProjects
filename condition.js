// if - else


/*if(condition){
    stat1;
    stat2;
}else{
    stat3;
}*/

isLogin = true;
if(isLogin){
    console.log("You are logged in");
}else{
    console.log("Please login");
}

  const age = 30;
 isIndian = true;
 if(age >= 18 && isIndian){
     console.log("User can vote");
 }else{
    console.log("user is not eligible for vote")
 }

  //else- if
 
 if (age <= 18){
     console.log("You are a minior");
  }else if(age <= 21) {
    console.log("You are a senior");
 }else{
    console.log("You are a higher senior");
  }


  //  0 - 35 fail 36 -60 pass 60-75 - firstClass 75-100 Disti

  let marks = 30;
  if(marks < 35){
    console.log("Fail");
  }else if(marks >= 35 && marks < 60){
    console.log("You are pass");
  }else if(marks >=60 && marks > 75){
    console.log("You are pass with first class grade");
  }else {
    console.log("You are pass with Disti");
  }

  if(marks > 75 && marks < 60 ){
    console.log("you are pass with Disit");
  }else if (marks > 60 && marks > 35){
    console.log("you are pass with first class");
  }else if(marks < 30){ 
    console.log("you are pass");
  }else{
    console.log("you are fail");
  }


  // emp
// sal <1l   <5l  25l
// deg SD PM RH
// exp 0-1 1-10  10-20

exp = 5;
deg = "PM";

if(exp < 1){
  if (deg == "SD"){
  console.log("Bouns1 for employee Softdev");
}else if (deg == "PM"){
  console.log("Bouns1 for employee Softdev has less 1 yr expre");
}
if(exp < 10){
} if(deg == "SD"){
  console.log("Bouns2 for employee Softdev");
}
}else if (deg == "PM"){
  console.log("Bouns2 for employee Softdev has less 10 yr expre");
}

const date = new Date();
console.log("Month", date.getFullYear());

day = date.getDay();

switch (day){
  case 1:
    console.log("Working day Monday");
    break;
  case 2:
    console.log("Working day tuesday");
    break;
  case 3:
    console.log("Working day wenasday");
    break;
  case 4:
    console.log("Wroking day thuesday");
    break;
  case 5:
    console.log("Working day friday");
    break;
  case 6:
    console.log("It's a holiday");
   break;
  case 0:
    console.log("It's my rest day");
    break;
  default:
    console.log("Enter a correct value");
}
 