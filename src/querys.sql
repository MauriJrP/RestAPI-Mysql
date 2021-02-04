CREATE DATABASE IF NOT EXISTS school;

USE school;

CREATE TABLE students (
  code INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40),
  career VARCHAR(4)
);

DESC students;

INSERT INTO students (name, career)
VALUES  ('Mauricio Rodriguez', 'INCO'),
        ('Pedrito Casas', 'INNI'),
        ('Juanito Mercado', 'INFO');

SELECT * FROM students;