function checkRegistrationData() {
  const predefinedEmail = "infoforge@gmail.com";
  const predefinedPassword = "1234";

  const loginForm = document.querySelector('.form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail === predefinedEmail && loginPassword === predefinedPassword) {
      window.location.href = "dashboard.html"; 
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
}
