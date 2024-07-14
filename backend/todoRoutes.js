import url from "node:url";
import {getTodos, createTodo, updateTodo, deleteTodo} from "./todoController.js";

const routes = {
    '/api/todos GET': getTodos,
    '/api/todos POST': createTodo,
    '/api/todos PUT': updateTodo,
    '/api/todos DELETE': deleteTodo,
};

const router = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = url.method;
    const routeKey = `${parsedUrl.pathname} ${method}`;

    if (routes[routeKey]) {
        routes[routeKey](req, res);
    } else if (routeKey.startsWith('/api/todos') && (method === 'PUT' || method === 'DELETE')) {
        routes[`/api/todos ${method}`](req, res);
    } else {
        res.writeHead(404, {'ContentType': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}));
    }
};

export default router;