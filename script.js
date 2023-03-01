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

    // Construct the URL with the form data as query parameters
    var url = "profile.html" + "?" +
              "name=" + encodeURIComponent(name1) + "&" +
              "job=" + encodeURIComponent(job1) + "&" +
              "link1=" + encodeURIComponent(link1) + "&" +
              "link2=" + encodeURIComponent(link2) + "&" +
              "link3=" + encodeURIComponent(link3) + "&" +
              "link4=" + encodeURIComponent(link4) + "&" +
              "link5=" + encodeURIComponent(link5) + "&" +
              "link6=" + encodeURIComponent(link6);

    // Debugging: log the constructed URL to the console
    console.log("Redirecting to: " + url);

    // Redirect the user to the profile page with the query parameters in the URL
    window.location.href = url;
  });
});
