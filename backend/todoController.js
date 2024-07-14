import Todo from "./todo.js";

const parseRequestBody = (req, callback) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(JSON.parse(body));
    });
};

const handleErrorResponse = (err, res) => {
    res.writeHead(500, {'ContentType': 'application/json'});
    res.end(JSON.stringify(err));
};

const handleSuccessResponse = (res, data, statusCode=200) => {
    res.writeHead(statusCode, {'ContentType': 'application/json'});
    res.end(JSON.stringify(data));
};

const getTodos = (req, res) => {
    Todo.getAll((err, results) => {
        if (err) {
            handleErrorResponse(err, res);
        } else {
            handleSuccessResponse(res, results);
        }
    })
};

const createTodo = (req, res) => {
    parseRequestBody(req, newTodo => {
        Todo.create(newTodo, (err, result) => {
            if (err) {
                handleErrorResponse(err, res);
            } else {
                handleSuccessResponse(res, {id: result.insertId, ...newTodo}, 201);
            }
        });
    });
}

const updateTodo = (req, res) => {
    const id = req.url.split('/').pop();
    parseRequestBody(req, updatedTodo => {
        Todo.update(id, updatedTodo, (err) => {
            if (err) {
                handleErrorResponse(err, res);
            } else {
                handleSuccessResponse(res, updatedTodo);
            }
        });
    });
};

const deleteTodo = (req, res) => {
    const id = req.url.split('/').pop();
    Todo.delete(id, (err) => {
        if (err) {
            handleErrorResponse(err, res);
        } else {
            res.writeHead(204, {'ContentType': 'application/json'});
            res.end();
        }
    });
};

export {getTodos, createTodo, updateTodo, deleteTodo};