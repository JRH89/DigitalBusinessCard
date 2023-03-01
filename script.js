document.getElementById("my-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Get form input values
  var name = document.getElementById("name2").value;
  var job = document.getElementById("job2").value;
  var website = document.getElementById("link1").value;
  var github = document.getElementById("link2").value;
  var linkedin = document.getElementById("link3").value;
  var twitter = document.getElementById("link4").value;
  var reddit = document.getElementById("link5").value;
  var email = document.getElementById("link6").value;

  // Create JSON object
  var data = {
    "name": name,
    "job": job,
    "website": website,
    "github": github,
    "linkedin": linkedin,
    "twitter": twitter,
    "reddit": reddit,
    "email": email
  };

  // Convert JSON object to string
  var jsonData = JSON.stringify(data);
  
  // Save JSON data to localStorage
  localStorage.setItem("profileData", jsonData);
});
