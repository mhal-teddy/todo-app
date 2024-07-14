document.addEventListener('DOMContentLoaded');

function fetchTodos() {
    fetch('http://app:3000/api/todos')
    .then(response => response.json())
    .then(todos => {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.getElementById('li');
            li.textContent = li.title;
            todoList.appendChild(li);
        });
    });
};

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
    const newTodo = document.getElementById('new-todo').value;
    fetch('http://app:3000/api/todos', {
        method: 'POST',
        headers: {
            'ContentType': 'application/json'
        },
        body: JSON.stringify({title: newTodo}),
    })
    .then(response => response.json())
    .then(todo => {
        const todoList = document.getElementById('todo-list');
        const li = document.getElementById('li');
        li.textContent = todo.title;
        todoList.appendChild(li);
        document.getElementById('new-todo').value = '';
    });
});