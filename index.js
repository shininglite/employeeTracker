// Require inquirer
const inquirer = require('inquirer');

// Require the api and html routes
// require('./routes/apiRoutes')(app);

const connection = require('./DB/connection');

inquirer
    .prompt([
        {
            type: "list",
            message: "Do you want to view employees?",
            name: "viewEmployees",
            choices: [
                "yes",
                "no"
            ]
        }
    ])
    .then(function({viewEmployees}){
        if(viewEmployees === 'yes'){
            connection.query("SELECT * FROM employees")
            .then(results => console.table(results))
            .catch(error => console.log(error))
        }
    })