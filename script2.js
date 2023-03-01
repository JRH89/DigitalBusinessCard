document.addEventListener('DOMContentLoaded', function() {
  

  fetch('/profile.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('name2').innerText = data.name || '';
      document.getElementById('job2').innerText = data.job || '';
      document.getElementById('l1').href = data.link1 || '';
      document.getElementById('l2').href = data.link2 || '';
      document.getElementById('l3').href = data.link3 || '';
      document.getElementById('l4').href = data.link4 || '';
      document.getElementById('l5').href = data.link5 || '';
      document.getElementById('l6').href = data.link6 || '';
      
      // Redirect the user to the profile page
      window.location.href = 'profile.html';
    });
});
