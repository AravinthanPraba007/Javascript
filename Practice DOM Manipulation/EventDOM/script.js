// Event
var button = document.getElementById('button');

console.log(button);
button.addEventListener('click', buttonClick);

function buttonClick(e) {

    // Data we can get from e - event parameter
    console.log("Button clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.type);

    // Mouse position with respect to screen
    console.log(e.clientX);
    console.log(e.clientY);

    // Mouse position with respect to the element
    console.log(e.offsetX);
    console.log(e.offsetY);

    // is alt / ctr/ shift key pressed
    console.log("Alt key pressed : "+e.altKey);
    console.log("Alt key pressed : "+e.ctrlKey);
    console.log("Alt key pressed : "+e.shiftKey);

}

// Event Types
// Button - click, dlclick, mouseup, miousedown

// Area - mouseenter, mouseleave - for parent alone
// mouseover, mouseout - for child element also

// input box - keyup, keydown, keypress, focus, blur, cut, paste

var box = document.getElementById('box');
box.addEventListener('mousemove', runMouseMoveEvent)
var output = document.getElementById('output');

var selection = document.getElementById('select');
selection.addEventListener('change', runEvent);

var inputInput = document.getElementById('itemInput');
inputInput.addEventListener('input', runEvent);

var inputPreview = document.getElementById('itemInputPreview');
var form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', runFormSubmitEvent)
function runEvent(e){
    console.log("Event Type : "+ e.type);
    console.log("Value : "+e.target.value);
    inputPreview.innerHTML = e.target.value;
}

function runFormSubmitEvent(e){
    e.preventDefault();
    console.log("Event Type : "+ e.type);
}

function runMouseMoveEvent(e){
    output.innerHTML = '<h3> MouseX : '+e.offsetX+
    ' </h3><h3> MouseY : '+e.offsetY+'</h3>';
}
