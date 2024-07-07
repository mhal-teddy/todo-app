http = require("node:http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("ContentType", "text/plain");
    res.end("Hello World\n");
});

server.listen(port);