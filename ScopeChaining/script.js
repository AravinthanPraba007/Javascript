var myName = "Aravinthan"
// It is using the myName in it's scope
console.log(`line number 3 ${myName} using from own scope`)

function sayMyName() {
    var myName = "Praba"
    // It is using the myName in it's scope
    console.log(`line number 8 ${myName} using from own scope`)
    sayAgain()
    // It is not having myName so it ask the outer scope  
    function sayAgain() {
        console.log(`line number 12 ${myName} using from outer scope`)
    }
}
// It is not having myName so it ask the outer scope  
function sayName() {
    console.log(`line number 16 ${myName} using from outer scope`)
}

sayMyName()
sayName()