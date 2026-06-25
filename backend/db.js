const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abhijeet123",
    database: "noteshub"
});
connection.connect((err) => {

    if (err) {
        console.log("Database connection failed");
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }

});
module.exports = connection;