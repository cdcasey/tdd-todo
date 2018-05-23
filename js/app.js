const inputField = document.querySelector('#task-name');
const addButton = document.querySelector('#add-task');
const todoList = document.querySelector('#todo-list');

function addTask(event) {
  const newTask = document.createElement('div');
  newTask.innerHTML = `${inputField.value}<button class="complete-task">X</button>`;
  todoList.appendChild(newTask);
}

function completeTask(event) {
  const theButton = event.target;
  if (theButton.getAttribute('class').includes('complete-task')) {
    theButton.parentNode.classList.add('completed');
  }
}
addButton.addEventListener('click', addTask);
todoList.addEventListener('click', completeTask);
