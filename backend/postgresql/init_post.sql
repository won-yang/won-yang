DROP TYPE IF EXISTS BUILDING_T;
CREATE TYPE BUILDING_T AS ENUM('APARTMENT', 'DETACHED_HOUSE', 'ROW_HOUSE', 'VILLA', 'OFFICETEL', 'ETC');
DROP TYPE IF EXISTS ROOM_T;
CREATE TYPE ROOM_T AS ENUM('STUDIO_WITH_SEPERATION', 'STUDIO', 'LOFT', 'TWO_BEDROOM', 'THREE_BEDROOM', 'ETC');
DROP TYPE IF EXISTS WINDOW_SIDE_T;
CREATE TYPE WINDOW_SIDE_T AS ENUM('NORTH', 'SOUTH', 'EAST', 'WEST');
DROP TYPE IF EXISTS STATUS_T;
CREATE TYPE STATUS_T AS ENUM('IN_PROGRESS', 'EXPIRED', 'CONTRACTED');


DROP TABLE IF EXISTS POST;
CREATE TABLE POST
(
	id SERIAL PRIMARY KEY,
	title VARCHAR(100),
	contact VARCHAR(100),
	deposit INTEGER,
	monthly_rent INTEGER,
	service_fee INTEGER,
	electricity BOOLEAN,
	water BOOLEAN,
	gas BOOLEAN,
	end_at TIMESTAMP,
	start_at TIMESTAMP,
	address VARCHAR(100),
	address_detail VARCHAR(100),
	address_private BOOLEAN,
	total_floor INTEGER,
	current_floor INTEGER,
	building_type BUILDING_T,
	room_type ROOM_T,
	window_side WINDOW_SIDE_T,
	walking_time INTEGER,
	bus_time INTEGER,
	content VARCHAR(2000),
	is_private BOOLEAN,
	post_status STATUS_T
);

INSERT INTO POST (title, contact, deposit, monthly_rent, service_fee, electricity, 
					water, gas, end_at, start_at, address, address_detail,
					address_private, total_floor, current_floor, building_type, 
					room_type, window_side, walking_time, bus_time, content, is_private, post_status
) VALUES
('1집 구합니다!!', '010-1234-1234', 200, 30, 2, true, true, true, current_timestamp, current_timestamp, 
	'개포동 연스시 근처', 'ㅇㅇ고시원', true, 4, 3, 'ROW_HOUSE', 'STUDIO', 'SOUTH', 20, 15, '양도합니다', true, 'IN_PROGRESS');

INSERT INTO POST (title, contact, deposit, monthly_rent, service_fee, electricity, 
					water, gas, end_at, start_at, address, address_detail,
					address_private, total_floor, current_floor, building_type, 
					room_type, window_side, walking_time, bus_time, content, is_private, post_status
) VALUES
('2[계약완료] 집 구합니다!!', '010-1234-1234', 200, 30, 2, true, true, true, current_timestamp, current_timestamp, 
	'개포동 연스시 근처', 'ㅇㅇ고시원', true, 4, 3, 'ROW_HOUSE', 'STUDIO', 'SOUTH', 20, 15, '양도합니다', true, 'EXPIRED');