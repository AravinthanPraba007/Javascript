const states = [
    "TamilNadu", 
    "Kerala", 
    "Assam", 
    52,
    "Delhi",
    "Nepal"]

// For loop
for(let i=0; i < states.length; i++) {
    console.log(states[i])
}


for(let i=0; i < states.length; i++) {
    if(typeof states[i] !== "string"){
        console.log("USed continue to skip non string value at index " + i)
        continue;
    }        
    console.log(states[i])
}


for(let i=0; i < states.length; i++) {
    if(typeof states[i] !== "string"){
        console.log("USed to break to stop the for loop at index " + i +" since non string is encountered")
        break;
    }        
    console.log(states[i])
}

// While loop

let whileIdx =0 
while(whileIdx < states.length) {
    console.log(states[whileIdx])
    whileIdx++
}

// do while loop

let doWhileIdx = 0;

do {
    console.log(doWhileIdx)
    doWhileIdx++
} while (doWhileIdx < 10)

// For each loop
states.forEach( (state) => (console.log(state)) )


// For of - used to iterate array

const names = [
    "Google",
    "youtube",
    "instgram",
    "facebook",
    "linkedin",
    "Amazon"
]

for (const name of names) {
    console.log(name)
}


// For in used to itrate object

const symbols = {
    go : "Google",
    yu : "Youtube",
    ln : "LinkedIn",
    fb : "facebook",
    ig : "instagram"
}

for (const n in symbols) {
    console.log(`key is: ${n} and value is: ${symbols[n]}`)
}