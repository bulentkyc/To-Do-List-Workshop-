/*
alert('Hello World');

let student;

let userName = prompt('Please let me know your name');

alert('Hello' + ' ' + userName);


let toDoItem1 = prompt('Please type something to do');

let toDoItem2 = prompt('Please type something to do');

let toDoItem3 = prompt('Please type something to do');

alert('You should do these: \n' + toDoItem1 + '\n'  + toDoItem2 + '\n' + toDoItem3 );


let itemCount = prompt('How many items wish you add to the list');

let list = '';

for(let counter = 1; counter <= itemCount; counter++){
    let item = prompt('Please type something to do');
    list += '<li>' + item + '</li>';
}

//alert('Your TO-DO List: \n' + list);

document.getElementById('toDoList').innerHTML += list;

*/


function updateList() {
    document.getElementById('toDoList').innerHTML = localStorage.getItem('toDoList');
}

function updateData() {
    localStorage.setItem('toDoList',document.getElementById('toDoList').innerHTML);
}

updateList();

function addItem() {
    let newItem = document.getElementById('item').value;
    document.getElementById('toDoList').innerHTML += '<li>' + 
    '<button onclick="deleteItem(this)">🗑️</button>' + 
    newItem + 
    '</li>';
    
    updateData()
}

function deleteItem(e) {
    e.parentNode.remove();
    updateData()
}

function deleteAll() {
    localStorage.setItem('toDoList','');
    updateList();
}