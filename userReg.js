document.addEventListener("DOMContentLoaded", function () {
  let usernameEl = document.getElementById("username");
  let resNameEl = document.getElementById("userName");
  let resEmailEl = document.getElementById("userEmail");
  let resPasswordEl = document.getElementById("password");
  let registrationForm = document.getElementById("registration");
  let submitBtnEl = document.getElementById("submitBtn");
  let ConfirmPasswordEl = document.getElementById("ConfirmPassword");
  let ConfirmMessageEl = document.getElementById("ConfirmMessage");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    if (resPasswordEl.value !== ConfirmPasswordEl.value) {
      ConfirmMessageEl.textContent = "Passwords do not match!";
    } else {
      // Clear any previous error message
      ConfirmMessageEl.textContent = "";

      // Submit the form using AJAX or allow the default form submission
      registrationForm.submit();
    }
  });

  // Additional JavaScript code and event handlers can be added as needed
  backBtnEl.onclick=function(){
   backBtnEl.textContent='Done!';
   window.location.href='./index.html';
});

