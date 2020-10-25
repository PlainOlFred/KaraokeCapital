const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "karaoke_capital_db"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("connected as " + connection.threadId);
})

module.exports = connection;