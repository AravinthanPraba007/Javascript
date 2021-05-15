
// Js scan the variable made undefined 

console.log(`Calling the variable name upfront , it's value is ${myName}`)
var myName = "aravinthan"
console.log(`Calling the variable name after assignment is completed , it's value is ${myName}`)


function sayMyName() {
    var myName = "praba"
    console.log(`Function sayMyName ${myName}`)
}

sayMyName()
console.log(`Normal sayMyName ${myName}`)

// I can call the function upfront , since Js scanned the function and made available
tipper(5);

function tipper(tip){
    var bill = parseInt(tip) + 50;
    console.log(`bill amount is ${bill}`)
}



var tipVar1 = function (tip){
    var bill = parseInt(tip) + 50;
    console.log(`bill amount is ${bill}`)
}
// tipvar1 is variable so JS will scan variable and assign undefine and on execution only the value is assigned 
// so we can call the variable below the assingment done
tipVar1(15)


// But tipvar2 is variable called before assignment , so at this point it will be undefined
// Error thrown like --  Uncaught TypeError: tipVar2 is not a function
tipVar2(10)

var tipVar2 = function (tip){
    var bill = parseInt(tip) + 50;
    console.log(`bill amount is ${bill}`)
}

