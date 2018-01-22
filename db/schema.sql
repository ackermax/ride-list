### Schema

CREATE DATABASE ride_list_db;
USE ride_list_db;

CREATE TABLE rides
(
	id int NOT NULL AUTO_INCREMENT,
	ride_name varchar(255) NOT NULL,
	rode BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);