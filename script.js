document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById("my-form");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
      // Prevent the form from submitting normally
    
  
      // Get the user input
      var name1 = document.getElementById("name2").value;
      var job1 = document.getElementById("job2").value;
      var link1 = document.getElementById("link1").value;
      var link2 = document.getElementById("link2").value;
      var link3 = document.getElementById("link3").value;
      var link4 = document.getElementById("link4").value;
      var link5 = document.getElementById("link5").value;
      var link6 = document.getElementById("link6").value;
      let l1 = document.getElementById("l1");
      let l2 = document.getElementById("l2");
      let l3 = document.getElementById("l3");
      let l4 = document.getElementById("l4");
      let l5 = document.getElementById("l5");
      let l6 = document.getElementById("l6");
      

      // Populate the placeholders with the user input
      document.getElementById("name2").innerText = name1;
      document.getElementById("job2").innerText = job1;
      l1.href = link1 || '';
      l2.href = link2 || '';
      l3.href = link3 || '';
      l4.href = link4 || '';
      l5.href = link5 || '';
      l6.href = link6 || '';
  
      // Redirect the user to the profile page
      
    });
  });
