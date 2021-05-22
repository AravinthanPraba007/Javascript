console.log("hello world")
/*
var userOne;
let userTwo;
console.log(userOne);
console.log(userTwo);


userOne = "aaa";
userTwo = "bbbb";
console.log(userOne);
console.log(userTwo);


console.log(userThree);
console.log(userFour);
var userThree;
let userFour;

*/
let userC;
console.log(userA);
userC = "ccc"
console.log(userC);


var userA;
let userB;
console.log(userB);

function sayName() {
    console.log("Hello user");
    var counter = 1;
    console.log(counter++);
    console.log(userC);
    sayBye();
    function sayBye() {
        console.log("Byee");
        console.log(counter);
        sayReminder("See you tommorow");
        function sayReminder(message) {
            console.log(message);
        }
    }
}


sayName()
sayName()
console.log("end")