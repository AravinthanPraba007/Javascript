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


// Fill method

var testArray1 = [2, 4, 6, 8, 10, 12 ,14, 16]
console.log("USe of fill function : " + testArray1.fill("Filling"))

var testArray2 = [2, 4, 6, 8, 10, 12 ,14, 16]
console.log("Use of fill with start postion 2: " + testArray2.fill("filling", 2))

var testArray3 = [2, 4, 6, 8, 10, 12 ,14, 16]
console.log("Use of fill with start postion 2 and end postion 5 " + testArray3.fill("filling", 2, 5))


//  Filter method
// Use arrow function inside the filter method

var testArray = [12, 22, 34, 45, 55, 56, 67, 89, 110]
console.log("Use of filter no above 40 : "+ testArray.filter( (num) => (num > 40) ))

// Slice method

var testSliceArray = ["Ram", "Ravi" , "ANil", "Ravi", "Rahul", "Prem"]
console.log("Use of slice method start : 2 and end : 5 : " + testSliceArray.slice(2, 5))

// Splice method

var testSpliceArray = ["Ram", "Ravi" , "ANil", "Rakesh", "Rahul", "Prem", "Suresh", "Lokesh"]
testSpliceArray.splice(2, 4, "praba", "kavin")
console.log("Use of splice method start : 2, Count 4, Add praba, kavin  : " + testSpliceArray)

