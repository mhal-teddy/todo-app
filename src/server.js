import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import router from "./backend/todoRoutes.js";

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
    } else if (req.url === '/') {
        fs.readFile(path.join('./frontend', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, {'ContentType': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/styles.css') {
        fs.readFile(path.join('./frontend', 'styles.css'), (err, data) => {
            if (err) {
                res.writeFile(404);
                res.end('File not found');
            } else {
                res.writeHead(200, {'ContentType': 'text/css'});
                res.end(data);
            }
        });
    } else if (req.url === '/script.js') {
        fs.readFile(path.join('./frontend', 'script.js'), (err, data) => {
            if (err) {
                res.writeFile(404);
                res.end('File not found');
            } else {
                res.writeHead(200, {'ContentType': 'application/json'});
                res.end(data);
            }
        });
    } else {
        router(req, res);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});