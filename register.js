function validateRegistrationForm() {
    const fullNameInput = document.getElementById("fullNameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const phoneNumberInput = document.getElementById("phoneNumberInput");
    const birthDateInput = document.getElementById("birthDateInput");
    const streetAddressInput = document.getElementById("streetAddressInput");
    const countryInput = document.getElementById("countryInput");
    const cityInput = document.getElementById("cityInput");
    const regionInput = document.getElementById("regionInput");
    const postalCodeInput = document.getElementById("postalCodeInput");

  
  
    if (fullNameInput.value.trim() === "") {
      alert("Please enter your full name");
      fullNameInput.focus();
      return false;
    }
  
    if (emailInput.value.trim() === "") {
      alert("Please enter your email address");
      emailInput.focus();
      return false;
    }
  
    if (passwordInput.value.trim() === "") {
      alert("Please create a password");
      passwordInput.focus();
      return false;
    }
  
    if (confirmPasswordInput.value.trim() === "") {
      alert("Please confirm your password");
      confirmPasswordInput.focus();
      return false;
    }
  
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Passwords do not match");
      confirmPasswordInput.focus();
      return false;
    }
  
    if (phoneNumberInput.value.trim() === "") {
      alert("Please enter your phone number");
      phoneNumberInput.focus();
      return false;
    }
  
    if (birthDateInput.value.trim() === "") {
      alert("Please enter your birth date");
      birthDateInput.focus();
      return false;
    }
  
    if (streetAddressInput.value.trim() === "") {
      alert("Please enter your street address");
      streetAddressInput.focus();
      return false;
    }
  
    if (countryInput.value.trim() === "Country") {
      alert("Please select a country");
      countryInput.focus();
      return false;
    }
  
    if (cityInput.value.trim() === "") {
      alert("Please enter your city");
      cityInput.focus();
      return false;
    }
  
    if (regionInput.value.trim() === "") {
      alert("Please enter your region");
      regionInput.focus();
      return false;
    }
  
    if (postalCodeInput.value.trim() === "") {
      alert("Please enter your postal code");
      postalCodeInput.focus();
      return false;
    }
  
    return true;
  }
  
