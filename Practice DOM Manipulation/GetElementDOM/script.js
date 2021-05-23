// Get element by ID
console.log(document.getElementById('header-title'));
var header = document.getElementById('header-title');
console.log(header);

// header.textContent = 'Hello123';
// header.innerText = 'Hey!!';
// header.innerHTML = '<h3>Welcome</h3>';

// Get Element by class name

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[2].innerText ='Hello 2'

for(var i = 0 ; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

//Get Element by tag

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[2].innerText ='Hello 2'

for(var i = 0 ; i < li.length; i++) {
    li[i].style.backgroundColor = '#FFFF00';
}


// QuerySelector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
console.log(submit);
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var lastItem = document.querySelector('.list-group-item:nth-child(2)');
lastItem.style.color = 'gray';

// Query Selector all

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].innerText = "Please enter a Item below";

var odd = document.querySelectorAll('li:nth-child(odd');
var even = document.querySelectorAll('li:nth-child(even');

for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
