# Employee Tracker

Employee Tracker is a solution for managing a company's employees. It allows you to view and interact with employee information that is stored in a MySQL database. With Employee Tracker you can create new departments, add new employees, and add new employee roles. 

## Development

Employee Tracker was built with node.js, inquirer.js , and a MySQL database.

## Usage

This application is deployed on GitHub where you can see and download the source code.

To use see or use the source code of this application:

- Clone the GitHub repository at: https://github.com/shininglite/employeeTracker

- Download and install node.js.

- To automatically install dev dependencies, run "npm i"

- Install MySQL and MySQL Workbench

- From a terminal window such as the integrated terminal window in VSCode, type "node server.js" to run the application. You will be prompted in the terminal for input to create and manage your MySQL database.

For your reference, the database table contains three tables:

![Database Schema](Assets/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  
The application allows you to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

  Below is a gif of the application that animates its use. It will animate if you view this file with software that interprets markdown syntax, such as previewing the file in VSCode.

  ![Employee Tracker](Assets/employee-tracker.gif)


## Possible Future Enhancements

This application could be extended in any number of ways, including the ability to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Developers

- Maxwell Hankner
- Tom van Deusen
