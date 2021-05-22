let user = {
  name: "John",
  age: 30,

  sayName() {
    // "this" is the "current object"
    alert(this.name);
  },

  sayAge() {
    // "this" is the "current object"
    alert(user.age);
  }

};

console.log(user);
user.sayName();
user.sayAge();
 // John