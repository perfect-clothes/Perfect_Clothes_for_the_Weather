const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'host',
    user: 'user',
    password: 'password',
    database: 'database'
});