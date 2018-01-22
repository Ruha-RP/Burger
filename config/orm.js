//This file will hold methods that executes MySQL commands
//The Methods: Retrieve and Store data in burgers_db

//ORM (Object-Relational Mapping): allows you to work with object and 
//have them saved to the database automatically.

//Adv:
//1)Simplifies CRUD operations
//2)Makes code more object oriented

//Requiring the connection variable (exported from connection.js)
var connection = require('./connection.js');
console.log("trying to link");

// //the object that is exported
var orm = {

	// selectAll method: This will retrieve all entries from the burgers_db
	selectAll: function(tableInput) {
		//READ
		connection.query("SELECT * FROM burgers", function(err, result) {
			if (err) {
				//give the code 500 if error (Internal Server Error)
				return res.status(500).end();
			};
		});
	},

	//this adds a new entry
	insertOne: 	function() {
		//CREATE
		connection.query("INSERT INTO burgers (burger_name) VALUES (?)", )
	},

	//this updates the entry
	updateOne: function() {
		//UPDATE
		connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [], function(err, result) {
		if (err) {
			//gives the code 500 if error
			return res.status(500).end();
		}
		else if {

		};

		};)

	};

};

//exporting the object
module.exports = orm;

