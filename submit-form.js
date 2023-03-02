exports.handler = async function(event, context) {
    try {
      const data = JSON.parse(event.body);
  
      // Read the existing data from the JSON file
      const fs = require("fs");
      const fileContents = fs.readFileSync("profile.json");
      const jsonData = JSON.parse(fileContents);
  
      // Update the JSON data with the form data
      jsonData.name = data.name2;
      jsonData.job = data.job2;
      jsonData.links = {
        link1: data.link1,
        link2: data.link2,
        link3: data.link3,
        link4: data.link4,
        link5: data.link5,
        link6: data.link6
      };
  
      // Write the updated JSON data back to the file
      fs.writeFileSync("profile.json", JSON.stringify(jsonData));
  
      // Return a success response
      return {
        statusCode: 200,
        body: "Data updated successfully."
      };
    } catch (error) {
      // Return an error response
      return {
        statusCode: 500,
        body: error.toString()
      };
    }
  }
  