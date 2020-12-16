-- create database
DROP DATABASE IF EXISTS burgers_db; 
CREATE DATABASE burgers_db;

-- select database
USE burgers_db;

-- create table
CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(250) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);