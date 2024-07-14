import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "db",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export default connection;