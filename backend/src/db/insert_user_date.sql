INSERT INTO USERS (auth_id, nickname, school_id, last_login) VALUES ('1234','MIMMIM', 0, current_timestamp);
commit;

SELECT * FROM USERS;