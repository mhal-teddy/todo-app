import db from "./mysql.js";

const Todo = {
    getAll: (callback) => {db.query("SELECT * FROM todos", callback);},
    create: (todo, callback) => {db.query("INSERT INTO todos SET ?", todo, callback);},
    update: (id, todo, callback) => {db.query("UPDATE todos SET ? WHERE id = ?", [todo, id], callback);},
    delete: (id, callback) => {db.query("DELETE FROM todos WHERE id = ?", [id], callback);},
};

export default Todo;