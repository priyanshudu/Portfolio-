// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form demo
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  let name = document.getElementById('nameField').value;
  let email = document.getElementById('emailField').value;
  let msg = document.getElementById('msgField').value;
  alert('Demo message sent!\nName: '+name+'\nEmail: '+email+'\nMessage: '+msg);
  this.reset();
});
