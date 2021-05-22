let man = {
  name : "Ravi"
}

let woman = {
  name : "Roja"
}

woman.husband = man;
man.wife = woman;

console.log(man);
console.log(woman)

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});


console.log(family);
