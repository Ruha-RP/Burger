//This fie connects Node to MySQL

//Dependancies
var mysql = require("mysql");

//Creating the connection variable
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

//Connecting to database
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	//to inform in console of connection
	console.log("connected as id: " + connection.threadId);
});

//Exporting the connection
module.exports = connection;