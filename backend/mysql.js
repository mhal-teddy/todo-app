import mysql from "mysql"
const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

module.exports = connection;