var form = document.getElementById('addItemForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var clearSearch = document.getElementById('clearSearch');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItem);
filter.addEventListener('change', filterItem);
// Clear Search event
clearSearch.addEventListener('click', clearSearchText);

// Add Item
function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem = document.getElementById('newItemInput');   
    
    // Create new li element 
    var li = document.createElement('li');
    // add li values
    li.id = newItem.value;
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));
    console.log(li);

    // Create del button element
    var delButton = document.createElement('button');
    delButton.className="itemDelete"
    delButton.appendChild(document.createTextNode('X'));


    li.appendChild(delButton);
    itemList.appendChild(li);
    newItem.value="";
}

// Remove Item
function removeItem(e) {
    if(e.target.classList.contains('itemDelete')){
        console.log(1);
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}


// Filter Item
function filterItem(e){
    // Converts text to lower case
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items = itemList.getElementsByTagName('li');
    // Convert html Collection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}

// Clear Search
function clearSearchText(e){
    filter.value = "";
    let keyUpEvent = new Event('keyup');
    filter.dispatchEvent(keyUpEvent);
    console.log(filter);
}