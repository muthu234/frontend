document.getElementById('add-todo').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText === '') return;
    
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;
    todoItem.appendChild(todoTextSpan);
    
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit-todo');
    editButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const newText = prompt('Edit task:', todoTextSpan.textContent);
        if (newText) {
            todoTextSpan.textContent = newText.trim();
        }
    });
    todoItem.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete-todo');
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation();
        todoList.removeChild(todoItem);
    });
    todoItem.appendChild(deleteButton);

    // Notification Button
    const notifyButton = document.createElement('button');
    notifyButton.innerHTML = '<i class="far fa-bell"></i>';
    notifyButton.classList.add('notify-todo');
    notifyButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // Replace this with your custom functionality or remove if no action is needed
        console.log('Notification clicked for: ' + todoTextSpan.textContent);
    });
    todoItem.appendChild(notifyButton);
    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });
    
    todoList.appendChild(todoItem);
    todoInput.value = '';
}


