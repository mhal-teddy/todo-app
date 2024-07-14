import url from "node:url";
import todoController from "./todoController";

const routes = {
    '/api/todos GET': todoController.getTodos,
    '/api/todos POST': todoController.createTodo,
    '/api/todos PUT': todoController.updateTodo,
    '/api/todos DELETE': todoController.deleteTodo,
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

module.exports = router;