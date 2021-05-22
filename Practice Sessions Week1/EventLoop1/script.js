console.log("hello world")

function first() {
    console.log('first');
}

function second() {
    console.log('second');
}

function third() {
    console.log('third');
}

first();
setTimeout(second, 10000); 
third();
setTimeout(third, 1);


