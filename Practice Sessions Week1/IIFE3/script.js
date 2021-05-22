const counter = (function() {
    let count = 0;
    return {
        increase: function() {
            count++;
            return `counter:${count}`;
        },
        decrease: function() {
            count--;
            return `counter:${count}`;
        }
    }
})();

console.log(counter);
console.log(counter.count);
counter.count = 5;
console.log(counter.increase()); // "counter:1"
console.log(counter.increase()); // "counter:2"
console.log(counter.decrease()); // "counter:1"
console.log(counter.decrease()); // "counter:0"
console.log(counter.decrease()); // "counter:-1"