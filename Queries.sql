CREATE TABLE states (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE
);

CREATE TABLE districts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    state_id INT,
    FOREIGN KEY (state_id) REFERENCES states(id)
);

CREATE TABLE villages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    district_id INT,
    FOREIGN KEY (district_id) REFERENCES districts(id)
);

CREATE TABLE villages_data (
    state TEXT,
    district TEXT,
    subdistrict TEXT,
    village TEXT
);

INSERT INTO states(name)
SELECT DISTINCT state FROM villages_data;

INSERT INTO districts(name, state_id)
SELECT DISTINCT vd.district, s.id
FROM villages_data vd
JOIN states s ON vd.state = s.name;

INSERT INTO villages(name, district_id)
SELECT vd.village, d.id
FROM villages_data vd
JOIN districts d ON vd.district = d.name;

SELECT * FROM villages LIMIT 10;

SELECT v.name AS village, d.name AS district
FROM villages v
JOIN districts d ON v.district_id = d.id;

SELECT 
    s.name AS state,
    d.name AS district,
    v.name AS village
FROM villages v
JOIN districts d ON v.district_id = d.id
JOIN states s ON d.state_id = s.id;