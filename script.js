document.addEventListener('DOMContentLoaded', function() {
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

    // Construct the JSON object with the form data
    var formData = {
      name: name1,
      job: job1,
      links: [
        link1,
        link2,
        link3,
        link4,
        link5,
        link6
      ]
    };

    // Debugging: log the constructed object to the console
    console.log(formData);

    // Send the JSON object to the server
    fetch('/profile', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      // Redirect the user to the profile page
      window.location.href = "/profile.html";
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
