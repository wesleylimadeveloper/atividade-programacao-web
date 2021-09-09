const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs'
})

connection.connect(error => {
    if(!error) {
        console.log('Database connected succesful!')
    } else {
        console.log('Failed to Make Connection.')
    }
})

module.exports = connection