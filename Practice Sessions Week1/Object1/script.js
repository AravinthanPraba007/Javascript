let user1 = {
  firstName : "Aravinthan",
  lastName : "P",
  age : 23,
  isAdmin : false
}

console.log(user1);

user1.isAdmin = true;

console.log(user1);

user1.isLoggedIn =  true;

console.log(user1);

delete user1.age;

console.log(user1);

let user2 = {
  firstName : "Arun",
  lastName : "S",
  age : 23,
  "premium User" : true
}

console.log(user2);

user2["pro activated"] = false;

console.log(user2);

console.log(user2["firstName"]);

alert("age" in user2);
alert("DOB" in user2);

// for(let key in user2) {
//   setTimeout( () => {
//   console.log (key + " : "+ user2[key]);
//   }, 1);
// }


let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  console.log( code ); // 49, 41, 44, 1
}


admin1 = {
  name : "Ravi"
}

console.log("Admin 1:");
console.log(admin1);

admin2 = admin1;

admin2.name = "Ram";
console.log("Admin 2:");
console.log(admin2);
console.log("Admin 1:");
console.log(admin1);

keyUser1 = {
  name  : "Peter"
}

console.log("keyUser1");
console.log(keyUser1);

keyUser2 = {};

Object.assign(keyUser2, keyUser1);

keyUser2.name = "Harry";

console.log("keyUser2");
console.log(keyUser2);
console.log("keyUser1");
console.log(keyUser1);
