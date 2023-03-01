document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  var form = document.getElementById("my-form");

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the user input
    var name1 = document.getElementById("name2").value;
    var job1 = document.getElementById("job2").value;
    var link1 = document.getElementById("link1").value;
    var link2 = document.getElementById("link2").value;
    var link3 = document.getElementById("link3").value;
    var link4 = document.getElementById("link4").value;
    var link5 = document.getElementById("link5").value;
    var link6 = document.getElementById("link6").value;

    // Construct the form data object
    var data = {
      name: name1,
      job: job1,
      link1: link1,
      link2: link2,
      link3: link3,
      link4: link4,
      link5: link5,
      link6: link6
    };

    // Send a POST request to the Netlify function
    fetch("submit-form.js", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(function(response) {
        // Handle the response
        console.log("Data updated successfully.");
      })
      .catch(function(error) {
        // Handle the error
        console.error(error);
      });
  });
});
