const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'JaredsPC',
  user: 'root',
  password: 'GratefulDead33!',
  database: 'dbkusers'
});

exports.handler = function(event, context, callback) {
  connection.connect(); // establish database connection
  
  const body = JSON.parse(JSON.stringify(event.body));

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
      const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ message: 'User added successfully' })
      };
      console.log(response.body);
      callback(null, response);
    }
  });
};
