passwordField = document.querySelector("#inputPassword")
printMessage = document.querySelector("#message")

function submitHere(passwordField){
    
    const error = []
    const inputElement = document.getElementById('inputPassword');
    const password = inputElement.value;
    console.log("password",password);
    

if (password.length < 6){
    error.push("Password must be 6 characters.");
    console.log("1");
}
if(!/[A-Z]/.test(password)){
    error.push("Password must contain at least one captial letter.")
    console.log("2");
}
if(/\d/.test(password)){
    error.push("Password not contain any number.")
    console.log("3");
}
if(error.length > 0){
document.getElementById("message").innerHTML  = `The following errors occurred: ${error.join(", ")}`;
}
else {
    error.push("Success")
    document.getElementById("message").innerHTML  = `The following errors occurred: ${error.join(", ")}`;
    console.log("4");
}
 
 
}





