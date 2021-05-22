function sayHello() {
    console.log("Hello");
}

console.log("Line 5");
sayHello();

(function () {
    console.log("IIFE");
})();