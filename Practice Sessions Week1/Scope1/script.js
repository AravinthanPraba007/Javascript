
// var keyword push the variable to gobal scope
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 10);
  }

//   let keyword push the variable to block scope
  for (let j = 0; j < 10; j++) {
    setTimeout(function() {
      console.log(j);
    }, 10);
  }