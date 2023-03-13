const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Handle form submissions
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    const values = [username, email, password];

    connection.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log('User added to database');
        res.send('User added to database');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
