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
  
      // Populate the placeholders with the user input
      document.getElementById("name2").innerText = name1;
      document.getElementById("job2").innerText = job1;
      document.getElementById("link1").href = l1;
      document.getElementById("l1").value = link1 || '';
      document.getElementById("link2").href = l2;
      document.getElementById("l2").value = link2 || '';
      document.getElementById("link3").href = l3;
      document.getElementById("l3").value = link3 || '';
      document.getElementById("link4").href = l4;
      document.getElementById("l4").value = link4 || '';
      document.getElementById("link5").href = l5;
      document.getElementById("l5").value = link5 || '';
      document.getElementById("link6").href = l6;
      document.getElementById("l6").value = link6 || '';
  
      // Redirect the user to the profile page
      window.location.href = "/profile.html";
    });
  });
  