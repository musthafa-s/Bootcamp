document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const todoList = document.getElementById('todoList');
    
    // Create list item
    const li = document.createElement('li');
    
    // Create task text
    const task = document.createElement('span');
    task.textContent = taskText;
    li.appendChild(task);
    
    // Create remove button
    const removeButton = document.createElement('span');
    removeButton.textContent = '❌';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', removeTask);
    li.appendChild(removeButton);
    
    // Add task item to the list
    todoList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
    
    // Mark task as complete when clicked
    task.addEventListener('click', toggleComplete);
  }
}

function removeTask(e) {
  const item = e.target.parentElement;
  item.remove();
}

function toggleComplete(e) {
  e.target.parentElement.classList.toggle('complete');
}
