const fs = require('fs');

exports.handler = async function(event, context) {
  // Parse the POST body from the request
  const body = JSON.parse(event.body);

  // Write the body to a JSON file
  fs.writeFileSync('./profile.json', JSON.stringify(body));

  // Return a success response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Profile saved successfully' })
  };
};
