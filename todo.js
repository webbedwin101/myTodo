// prompt("this is an prompt")
//Get a handle on USER input,
//Then store in a variable
//Write function that takes value in the variable input and pushes it into the unordered list li element
// function addtodo() {
    
// }
const mydiv = document.querySelector('p');
mydiv.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    mydiv.textContent = `${name}'s Tasks:`;
}

// const AddItem = document.querySelectory('button');
// AddItem.addEventListener('click', promptUser("Please Enter Your New To Do"))

function addTodo() {
    let userInput = prompt("Please enter your new To Do:");
    console.log(userInput); 
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput));
    li.setAttribute("id", "1"); // added line ids
    ul.appendChild(li);
}

//Removes a todo task
const ul = document.querySelector('.this-list');

ul.addEventListener('click', function(e) {
this.removeChild(e.target);
});

// Prompts user for completed task by attribute id, then toggles class of attribute id item to cross off the list
// function crossOffTodo() {
//     let done = prompt("Which task would you like to cross off the list?");
//     console.log(done);
//     // var ul = document.getElementById("list");
//     // var match = document.getElementById("li");
//     var match = document.querySelectorAll('[id=done]');
//     if (match = done) {
//         toggle();
//     }
//     else {alert("sorry I cant do that");}
// }

// function getInputFromTextBox() {
//     var input = document.getElementById("userInput").value;
//     alert(input);
// }

// addTodo();
    // importTodo();   
    // const listItem = document.createElement("p");
    // listItem.innerHTML = userInput;
    // document.getElementById("mydiv").appendChild(listItem);

// function addTodo() {
//     console.log('in the addtodo');
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(userInput));
//     console.log(userInput);
//     li.setAttribute("id", "1"); // added line
//     ul.appendChild(li);
//     alert(li.id);
// }
// function importTodo(){
//     const listItem = document.createElement("li");
//     listItem.innerHTML = userInput;
//     document.getElementById("unorderList").appendChild(listItem);
// }
// userInput = document.getElementById("userInput").value;
    
// const para = document.querySelector('p');

// para.addEventListener('click', updateName);

// function updateName() {
//   const name = prompt('Enter a new name');
//   para.textContent = `Player 1: ${name}`;
// }

// const newTodo = document.createElement('li');
// newTodo.innerHTML = userInput; 