const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GratefulDead33!',
  database: 'dbkusers'
});

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body);
  const username = body.username;
  const email = body.email;
  const password = body.password;
  
  // Insert the user into the database
  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  connection.query(sql, [username, email, password], function(error, results, fields) {
    if (error) {
      console.log(error);
      callback(error);
    } else {
      console.log(results);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: 'User added successfully' })
      });
    }
  });
};
