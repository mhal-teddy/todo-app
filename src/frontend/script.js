document.addEventListener('DOMContentLoaded', fetchTodos);

function fetchTodos() {
    fetch('http://127.0.0.1:3000/api/todos')
    .then(response => response.json())
    .then(todos => {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            todoList.appendChild(li);
        });
    });
};

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newTodo = document.getElementById('new-todo').value;
    if (newTodo === '') {
        alert('Please input text.');
        return;
    }

    fetch('http://127.0.0.1:3000/api/todos', {
        method: 'POST',
        headers: {
            'ContentType': 'application/json'
        },
        body: JSON.stringify({title: newTodo}),
    })
    .then(response => response.json())
    .then(todo => {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = todo.title;
        todoList.appendChild(li);
        document.getElementById('new-todo').value = '';
    });
});