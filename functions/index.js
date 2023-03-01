import { writeFileSync } from 'fs';
import { join } from 'path';

export async function handler(event, context) {
  // Parse the POST body from the request
  const body = JSON.parse(event.body);

  // Set the path to the profile.json file in the root directory
  const filePath = join(__dirname, '../profile.json');

  // Write the body to a JSON file
  writeFileSync(filePath, JSON.stringify(body));

  // Return a success response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data saved successfully' })
  };
}
