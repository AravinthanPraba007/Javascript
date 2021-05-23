// Create Element

// Create Div
var newDiv = document.createElement('div');
console.log(newDiv);

// Add class
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
// Add Attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Insert Hello world Text');

// Add text to div
newDiv.appendChild(newDivText);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);