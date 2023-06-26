
function checkRegistrationData() {
}

function handleFormSubmit(event) {
  event.preventDefault();


  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;


  const givenEmail = "infoforge@gmail.com"; 
  const givenPassword = "infoforge123"; 

  if (email === givenEmail && password === givenPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

document.getElementById("form").addEventListener("submit", handleFormSubmit);
