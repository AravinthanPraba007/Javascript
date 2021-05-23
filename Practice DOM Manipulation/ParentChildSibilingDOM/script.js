// Traversing DOM 

var itemList = document.querySelector('#items');
// partent Node 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

// Parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'red';
console.log(itemList.parentElement.parentElement);


// Child node
// Break line show as text in the array
console.log(itemList.childNodes);
// Show only the element
console.log(itemList.children);
console.log(itemList.children[1]);

// First Child and last Child
// Similar to chile node it consider the br as text
console.log(itemList.firstChild);
console.log(itemList.lastChild);

// First element child and last element child
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

// Next sibilings
// Consider break as text
console.log(itemList.nextSibling);
// Next element sibiling 
console.log(itemList.nextElementSibling);

// Previous Sibiling
// Consider break as text
console.log(itemList.previousSibling);
// Previous element sibiling
console.log(itemList.previousElementSibling);
