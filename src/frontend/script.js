document.addEventListener('DOMContentLoaded', fetchTodos);
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', (e) => addTodo(e));

function fetchTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    fetch('http://127.0.0.1:3000/api/todos')
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
        
            const todoButtons = document.createElement('div');
            todoButtons.className = 'todo-buttons';

            const updateButton = document.createElement('button');
            updateButton.className = 'update-button';
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click', () => {
                const newTitle = prompt('Enter new title: ', todo.title);
                if (newTitle) {
                    updateTodo(todo.id, newTitle);
                }
            })
        
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function (e) {
                deleteTodo(todo.id);
            })
        
            todoButtons.appendChild(updateButton);
            todoButtons.appendChild(deleteButton);
            li.appendChild(todoButtons);
            // li.appendChild(updateButton);
            // li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    });
};

function addTodo(e) {
    e.preventDefault();

    const newTodo = document.getElementById('new-todo').value;
    if (newTodo) {
        fetch('http://127.0.0.1:3000/api/todos', {
            method: 'POST',
            headers: {
                'ContentType': 'application/json'
            },
            body: JSON.stringify({title: newTodo}),
        })
        .then(fetchTodos);
        document.getElementById('new-todo').value = '';
    }
}

function updateTodo(id, title) {
    fetch(`http://127.0.0.1:3000/api/todos/${id}`, {
        method: 'PUT',
        headers: {
            'ContentType': 'application/json'
        },
        body: JSON.stringify({title}),
    })
    .then(fetchTodos);
}

function deleteTodo(id) {
    fetch(`http://127.0.0.1:3000/api/todos/${id}`, {
        method: 'DELETE',
    })
    .then(fetchTodos);
}