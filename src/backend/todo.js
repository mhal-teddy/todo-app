import connection from "./mysql.js";

const Todo = {
    getAll: async (callback) => {
        try {
            const [results] = await connection.query('SELECT * FROM todos');
            callback(null, results);
        } catch (err) {
            callback(err, null);
        }
    },
    create: async (todo, callback) => {
        try {
            const [results] = await connection.query("INSERT INTO todos SET ?", todo);
            callback(null, results);
        } catch (err) {
            callback(err, null);
        }
    },
    update: async (id, todo, callback) => {
        try {
            const [results] = await connection.query("UPDATE todos SET ? WHERE id = ?", [todo, id]);
            callback(null, results);
        } catch (err) {
            callback(err, null);
        }
    },
    delete: async (id, callback) => {
        try {
            const [results] = await connection.query("DELETE FROM todos WHERE id = ?", id);
            callback(null, results);
        } catch (err) {
            callback(err, null);
        }
    },
};

export default Todo;