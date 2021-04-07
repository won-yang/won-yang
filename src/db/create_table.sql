CREATE TABLE users
(
	user_idx smallint not null AUTO_INCREMENT,
	user_id varchar(50) not null,
	social varchar(50) not null,
	PRIMARY KEY (user_idx)
);

CREATE TABLE post
(
	post_idx mediumint not null AUTO_INCREMENT,
	user_id varchar(50) not null REFERENCES USERS(user_id),
	title varchar(50) not null,
	post_date datetime not null,
	PRIMARY KEY (post_idx)
);

CREATE TABLE notice
(
	post_idx mediumint not null AUTO_INCREMENT,
	user_id varchar(50) not null REFERENCES USERS(user_id),
	title varchar(50) not null,
	post_date datetime not null,
	content varchar(5000),
	PRIMARY KEY (post_idx)
);

CREATE TABLE thumbnail
(
	image_idx mediumint not null AUTO_INCREMENT,
	post_idx mediumint not null REFERENCES POST(post_idx),
	image_path varchar(100) not null,
	PRIMARY KEY (image_idx)
);

CREATE TABLE image
(
	image_idx mediumint not null AUTO_INCREMENT,
	image_path varchar(100) not null,
	image_date datetime not null,
	PRIMARY KEY (image_idx)
);

CREATE TABLE tag
(
	post_idx mediumint not null REFERENCES POST(post_idx),
	main_gate enum('0', '1') not null DEFAULT '0',
	west_gate enum('0', '1') not null DEFAULT '0',
	east_gate enum('0', '1') not null DEFAULT '0',
	etc_gate enum('0', '1') not null DEFAULT '1'
);

CREATE TABLE options
(
	post_idx mediumint not null REFERENCES POST(post_idx),
	refrigerator enum('0', '1') not null DEFAULT '0',
	desk enum('0', '1') not null DEFAULT '0',
	wifi enum('0', '1') not null DEFAULT '0',
	washing_machine enum('0', '1') not null DEFAULT '0',
	gas_stove enum('0', '1') not null DEFAULT '0',
	microwave enum('0', '1') not null DEFAULT '0',
	cctv enum('0', '1') not null DEFAULT '0',
	closet enum('0', '1') not null DEFAULT '0',
	bed enum('0', '1') not null DEFAULT '0',
	tv enum('0', '1') not null DEFAULT '0',
	public_washing_machine enum('0', '1') not null DEFAULT '0',
	public_kitchen enum('0', '1') not null DEFAULT '0',
	elevator enum('0', '1') not null DEFAULT '0',
	air_conditioner enum('0', '1') not null DEFAULT '0',
	door_lock enum('0', '1') not null DEFAULT '0'
);

CREATE TABLE post_content
(
	post_idx mediumint not null REFERENCES POST(post_idx),
	contact varchar(100),
	contract_period varchar(50),
	address varchar(100),
	deposit varchar(50),
	monthly_rent varchar(50),
	content varchar(5000)
);

CREATE TABLE admin
(
	user_id varchar(50) not null REFERENCES USERS(user_id),
	PRIMARY KEY (user_id)
);
