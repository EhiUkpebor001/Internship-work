function view(){
    window.location.href = './view.html';
}

const newInput = document.getElementById("inputList")

function newList(){
    let input = document.createElement('input');
    input.placeholder = 'Enter task';
    let result = newInput.appendChild(input);
    let output = result.textContent
    output;
}