CREATE TABLE USERS
(
	id SERIAL PRIMARY KEY,
	auth_id VARCHAR(30) NOT NULL,
	nickname VARCHAR(30),
	school_id INT,
	last_login TIMESTAMP
);
