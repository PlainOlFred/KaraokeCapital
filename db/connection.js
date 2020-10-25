const mysql = require("mysql");
let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "karaoke_capital_db"
});
}


connection.connect(function(err) {
    if (err) throw err;

    console.log("connected as " + connection.threadId);
})

module.exports = connection;