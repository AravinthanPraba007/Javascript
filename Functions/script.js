

// Normal function declaration
function getUserRole(name, role) {
    switch(role) {
        case "admin":
            return `${name} is having admin access`
            break
        case "subadmin":
            return `${name} is having sub admin access`
            break
        case "user":
            return `${name} is having user access`
            break
        default:
            return `${name} is a trail user`
            break
    }
}

// function in variable
var printUserRole = function (name, role) {
    switch(role) {
        case "admin":
            return `${name} is having admin access`
            break
        case "subadmin":
            return `${name} is having sub admin access`
            break
        case "user":
            return `${name} is having user access`
            break
        default:
            return `${name} is a trail user`
            break
    }
}




console.log(getUserRole("aravinthan", "admin"));

console.log(printUserRole("praba", "admin", "user"));




//Next level functions

//Normal function
function isEven(number) {
    return number % 2 === 0
}
// Var function 
var varISEven = function(number) {
    return number %2 === 0
}

console.log(isEven(3))
console.log(varISEven(2))


// Arrow function
var arrowIsEven = (number) => {
    return number %2 === 0
}

console.log(arrowIsEven(4))

//CallBAck function - every method have call back function, 
//We pass the function as reference , not call the function

var result = [2,4,6,8].every(arrowIsEven)
console.log("Result : "+result)


// In 2020 try to write callback function in arrow function manner
/*
(e) => {
    If {} is used need to return some thing
}

(e) => (
    if ()  is no need to return  
)
*/

var callbackResult = [2,4,6,7].every( (e) => (e % 2 === 0) )
console.log("Call back result " +callbackResult)
