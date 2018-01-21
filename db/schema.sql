-- Creates new database
CREATE DATABASE burgers_db;
-- Use the database
USE burgers_db;
-- Create table 
CREATE TABLE burgers (
-- Add columns
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100),
	devoured BOOLEAN false DEFAULT,
	PRIMARY KEY(id)
);
