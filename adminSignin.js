document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data (username and password)
  const username = document.getElementById('adminUsername').value;
  const password = document.getElementById('adminPassword').value;

  // Get the adminData from the PHP script
  fetch('adminSignin.php')
    .then(response => response.json())
    .then(adminData => {
      // Find the matching username and password in the adminData
      console.log(adminData);
      const matchingAdmin = adminData.find(admin => admin.username === username && admin.password === password);

      if (matchingAdmin) {
        let loggedInAdminData = {
          username: username,
          password: password,
          login_status: 'true',
        };

        // Store the admin data in localStorage
        let existingAdminData = localStorage.getItem('adminData');
        if (existingAdminData) {
          let parsedExistingAdminData = JSON.parse(existingAdminData);
          parsedExistingAdminData.login_status = 'true';
          localStorage.setItem('adminData', JSON.stringify(parsedExistingAdminData));
        } else {
          // Store the admin data in localStorage
          localStorage.setItem('adminData', JSON.stringify(loggedInAdminData));
        }

        // Authentication successful, redirect to donationrequest.html
        window.location.href = 'donationrequest.html';
      } else {
        // Authentication failed, display an error message
        const loginError = document.getElementById('login-error');
        loginError.innerHTML = 'Invalid username/password.';
        loginError.style.color = "red";
      }
    })
    .catch(error => {
      // Handle fetch error (e.g., network issue, PHP script not found)
      console.error('Error during login:', error);
    });
});

document.getElementById('backBtn').addEventListener('click', function() {
  // Redirect to index.html on clicking the Back button
  window.location.href = 'index.html';
});

