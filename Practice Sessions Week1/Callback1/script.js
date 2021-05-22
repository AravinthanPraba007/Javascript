// A function
function fn() {
    console.log('Just a function')
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
  }
  
  // Passing a function
  higherOrderFunction(fn)




function first() {
  console.log(1);
}
function second() {
  console.log(2);
}
function third() {
  console.log(3);
}

function set1() {
    console.log("--- Set 1 -  Make synchronus call for all function ---");
    first();
    second();
    third();
}

function set2() {
    console.log("---  Set 2 - make synchronus call but with second() add to setTimeout ---")
    function second() {
        setTimeout(() => {
            console.log(2);
        }, 0)
    }
    first();
    second();
    third();
}

function set3() {
    console.log("---  Set 3 - make synchronus call but with second() add to setTimeout and Excute thrid() after second() completed---")
    function second(callback) {
        setTimeout(() => {
            console.log(2);
            callback();
        }, 0)
    }
first();
second(third);
}

// Set 1 -  Make synchronus call -> o/p: 1,2,3
set1();

// Set 2 - make synchronus call but with second() add to setTimeout -> o/p: 1,3,2
set2();

//pass callback function as parmeter so that it is excuted after asynchronous action has completed.
// Excute thrid() after second3() completed -> o/p: 1,2,3
set3();
