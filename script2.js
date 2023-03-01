document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameters from the URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
  
    // Populate the profile page elements with the query parameter values
    document.getElementById("name2").innerText = params.name || '';
    document.getElementById("job2").innerText = params.job || '';
    document.getElementById("l1").href = params.link1 || '';
    document.getElementById("l2").href = params.link2 || '';
    document.getElementById("l3").href = params.link3 || '';
    document.getElementById("l4").href = params.link4 || '';
    document.getElementById("l5").href = params.link5 || '';
    document.getElementById("l6").href = params.link6 || '';
  });
  