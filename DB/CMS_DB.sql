DROP DATABASE IF EXISTS CMS_DB;
CREATE DATABASE CMS_DB;
USE CMS_DB;

CREATE TABLE employees(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(11) NOT NULL,
  manager_id INTEGER(11),
  PRIMARY KEY (id)
);

CREATE TABLE roles(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2) NOT NULL,
  department_id INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE departments(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO departments (department_name) values ('Retail');
INSERT INTO departments (department_name) values ('Human Resources');

INSERT INTO roles (title, salary, department_id) values ('Manager', 50000.00, 1);
INSERT INTO roles (title, salary, department_id) values ('Floor Assistant', 30000.00, 1);
INSERT INTO roles (title, salary, department_id) values ('Call Taker', 35000.00, 2);

INSERT INTO employees (first_name, last_name, role_id) values ('Seth', 'Godin', 3);
INSERT INTO employees (first_name, last_name, role_id) values ('Jane', 'Austen', 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) values ('Mark', 'Twain', 2, 1);

-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id;

-- SELECT title, note
-- FROM books
-- INNER JOIN notes ON books.id = notes.bookId;


