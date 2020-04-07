// required items
const mysql = require('mysql');
const util = require('util');
// 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'CMS_DB'
});

connection.connect(function(err) {
    if (err) throw err;
});
// we give connection.query access to promises
// i.e. .then() and .catch()
connection.query = util.promisify(connection.query);
// 
module.exports = connection;
