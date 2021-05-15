var country = ["India", "Japan", "UK", "America"]
console.log(`country : ${country}`)
console.log(country)

var states = new Array("TamilNadu", "Kerala", "Delhi", "Karnataka")
console.log(states)


var names = ["Jack", "Ram", "Ravi", "Arun", "Kavin"]
console.log(names)

console.log("Names array length " + names.length)
console.log("Index of Ram "+ names.indexOf("Ram"))
console.log("Index of Ram "+ names.indexOf("Praba"))

console.log("Names : " + names)

names.push("Jagan")
console.log("After push : " + names)

names.pop()
console.log("After pop  : "+names)

names.unshift("Navin")
console.log("After Unshift : "+names)

names.shift()
console.log("After Shift   : "+names)
