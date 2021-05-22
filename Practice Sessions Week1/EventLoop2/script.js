
var counter1 = 3500000000;
var counter2 = 3500000000;
console.log("Triggered bigCalculation function call inside the setTimeout at " + new Date());
setTimeout (function(){
    bigCalculation(counter2, "Attached to setTimeout")
    }, 0);

console.log("Triggered bigCalculation function call 1 noramlly at "+ new Date());
bigCalculation(counter1, "Normal call 1");
console.log("Triggered bigCalculation function call 2 noramlly at "+ new Date());
bigCalculation(counter1, "Normal call 2");

function bigCalculation(counter, message) {
    printTimeWithMessage(new Date(), `Start Time of ${message}`);
    while(counter>0) {
        counter--;
    }
    printTimeWithMessage(new Date(), `End Time of ${message}`);
}

function printTimeWithMessage (date, message) {
    console.log(date + " message : "+ message);
}


