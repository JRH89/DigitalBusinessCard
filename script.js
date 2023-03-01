document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById("my-form");
    
    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
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
  
      // Set the values in the query string of the redirect URL
      var redirectUrl = "https://jrh89.github.io/DigitalBusinessCard/profile.html?" +
        "name=" + encodeURIComponent(name1) +
        "&job=" + encodeURIComponent(job1) +
        "&link1=" + encodeURIComponent(link1) +
        "&link2=" + encodeURIComponent(link2) +
        "&link3=" + encodeURIComponent(link3) +
        "&link4=" + encodeURIComponent(link4) +
        "&link5=" + encodeURIComponent(link5) +
        "&link6=" + encodeURIComponent(link6);
  
      // Redirect the user to the profile page
      window.location.href = redirectUrl;
  
      // Prevent the form from submitting normally
      
    });
  });
  
  