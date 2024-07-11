import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile("./src/index.html", "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader("ContentType", "text/plain");
                res.end("Internal Server Error");
                console.log(err);
                return;
            }
            res.statusCode = 200;
            res.setHeader("ContentType", "text/html");
            res.end(data);
        });
    } else if (req.url === "/styles.css") {
        fs.readFile("./src/styles.css", "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader("ContentType", "text/plain");
                res.end("Internal Server Error");
                console.log(err);
                return;
            }
            res.statusCode = 200;
            res.setHeader("ContentType", "text/css");
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.setHeader("ContentType", "text/plain");
        res.end("Not Found");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
