// Require inquirer
const inquirer = require('inquirer');

// Require the api and html routes
// require('./routes/apiRoutes')(app);

const connection = require('./DB/connection');

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "userChoice",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View Departments",
          "View Roles",
          "View Employees",
          "Update Employee Roles"
        ]
      }
    ])
    .then(function ({ userChoice }) {
      switch (userChoice) {
        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "Update Employee Roles":
          uodateEmployeeRoles();
          break;

        default:
          console.log("default switch met")
          break;
      }

    })

}


function addDepartment() {
  console.log("add department")
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of this department?",
        name: "department_name"
      }
    ])
    .then(function ({ department_name }) {

      connection.query('INSERT INTO departments SET ?', {department_name: department_name})
        .then(console.log(department_name, "has been added to Departments!"))
        .catch(error => console.log(error))

    })
}

function addRole() {

}

function addEmployee() {

}

function viewDepartments() {

}

function viewRoles() {

}

function viewEmployees() {

}

function updateEmployeeRoles() {

}

init();