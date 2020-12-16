// Node.Js
const mysql = require("mysql");
const connection;

// use JawsDB
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    // server connect Mysql
    connection = mysql.createConnection( {
        port:3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

// connect to mysql
connection.connect(function(error) {
    if (error) {
        console.error("MYSQL CONNECTION ERROR: " + error);
    }
    console.log("Connected to MySQL server.");
});

// connection exported
module.exports = connection;