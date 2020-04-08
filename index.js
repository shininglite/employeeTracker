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
          updateEmployeeRoles();
          break;

        default:
          console.log("default switch met")
          break;
      }

    })

}


function addDepartment() {
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
      askToEndSession();
    })
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of this role?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the salary of this role? i.e. 25000.00",
        name: "salary"
      },
      {
        type: "input",
        message: "What is the department ID of this role?",
        name: "department_id"
      }
    ])
    .then(function ({ title, salary, department_id }) {
      connection.query('INSERT INTO roles SET ?',
      {
        title: title,
        salary: salary,
        department_id: department_id
      })
      .then(console.log(title, "has been added to Roles!"))
      .catch(error => console.log(error))
      askToEndSession();
    })
}

function addEmployee() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the first name of this employee?",
      name: "first_name"
    },
    {
      type: "input",
      message: "What is the last name of this employee?",
      name: "last_name"
    },
    {
      type: "input",
      message: "What is the role ID of this employee?",
      name: "role_id"
    },
    {
      type: "list",
      message: "Does this employee have a manager?",
      name: "hasManager",
      choices: [
        "Yes",
        "No"
      ]
    },
    {
      type: "input",
      message: "What is the ID of this employee's manager?",
      name: "manager_id",
      when: function(data){
        return data.hasManager === "Yes";
      }
    }
  ])
  .then(function (data) {
    if(data.hasManager === 'Yes'){
      connection.query('INSERT INTO employees SET ?',
      {
        first_name: data.first_name,
        last_name: data.last_name,
        role_id: data.role_id,
        manager_id: data.manager_id
      })
      .then(console.log(data.first_name, "has been added to Employees!"))
      .catch(error => console.log(error))
      askToEndSession();
    }
    else{
      connection.query('INSERT INTO employees SET ?',
      {
        first_name: data.first_name,
        last_name: data.last_name,
        role_id: data.role_id,
      })
      .then(console.log(data.first_name, "has been added to Employees!"))
      .catch(error => console.log(error))
      askToEndSession();
    }
  })
}

function viewDepartments() {
  connection.query('SELECT * FROM departments')
  .then(function(results){
    console.table(results);
    askToEndSession();
  })
  .catch(error => console.log(error))
}

function viewRoles() {
  connection.query('SELECT * FROM roles')
  .then(function(results){
    console.table(results);
    askToEndSession();
  })
  .catch(error => console.log(error))
}

function viewEmployees() {
  connection.query('SELECT * FROM employees')
  .then(function(results){
    console.table(results);
    askToEndSession();
  })
  .catch(error => console.log(error))
}

function updateEmployeeRoles() {

  let employeeNamesArray = []

  connection.query('SELECT * FROM employees')
  .then(function(results){

    for(let i = 0; i < results.length; i++){
      let name = results[i].first_name + ' ' + results[i].last_name;
      employeeNamesArray.push(name);
    }

    inquirer
      .prompt([
        {
          type: "list",
          message: "Which employee would you like to demote?",
          name: "employeeName",
          choices: employeeNamesArray
        },
        {
          type: "input",
          message: "What is this employee's new Role ID?",
          name: "newRoleId",
        }
      ])
      .then(function ({ employeeName, newRoleId }) {
        let employeeUniqueId = employeeNamesArray.indexOf(employeeName) + 1;

        connection.query('UPDATE employees SET ? WHERE employees.id = ?', [{role_id: newRoleId}, employeeUniqueId])
        .then(console.log(employeeName + " has been demoted to the Role ID of " + newRoleId))
        .catch(error => console.log(error))
        askToEndSession();

      })
    
  })
  .catch(error => console.log(error))
}

function askToEndSession() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to continue this session?",
        name: "choice",
        choices: [
          "Yes, bring me back to the main menu.",
          "No, I am done making changes."
        ]
      }
    ])
    .then(function ({ choice }) {
      if(choice === "Yes, bring me back to the main menu."){
        init();
      }
      else{
        connection.end();
      }
    })
}

init();