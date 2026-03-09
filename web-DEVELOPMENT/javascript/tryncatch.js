let a=prompt("Enter first number");
let b=prompt("Enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid input. Please enter valid numbers.");
}
let sum=parseInt(a)+parseInt(b);
console.log("The sum of "+a+" and "+b+" is "+sum);

function main(){
    let x=1;
try{
console.log("This sum is",sum*x)
return true;
}
catch(error){
    console.log("An error occurred: ",error.message);
    return false;
}
finally{
    console.log("This block will always execute.");
}

   let c= main();
}