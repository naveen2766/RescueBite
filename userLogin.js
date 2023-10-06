const loginError = document.getElementById('login-error');
document.getElementById('userLoginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let username = document.getElementById('userUsername').value;
    let password = document.getElementById('userPassWord').value;
	console.log(password);
    if (username === '') {
        loginError.innerHTML = 'Please enter Username';
        loginError.style.color = "red"; // Set the color using style
    } else if (password === '') {
        loginError.innerHTML = 'Please enter password.';
        loginError.style.color = "red"; // Set the color using style
    } else {
        // Make a POST request with the username and password
        fetch('userLogin.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Send data as JSON
        })
        .then(response => response.json())
        .then(userData => {
            console.log("came here ",userData);
            // Check if userData is empty or if it doesn't contain valid JSON
            if (!userData || userData.error) {
                loginError.innerHTML = 'Invalid username/password.';
                loginError.style.color = "red";
                console.log('invalid');
            } else {
                let loggedInUserData = {
                    username: username,
                    password: password,
                    login_status: 'true',
                };

                // Store the user data in localStorage
                localStorage.setItem('userData', JSON.stringify(loggedInUserData));
                window.location.href = 'register.html';
            }
        })
        .catch(error => {
            // Handle fetch error (e.g., network issue, PHP script not found)
            console.error('Error during login:',error);
        });
    }
});

document.getElementById("ResbackBtn").addEventListener('click', function(event) {
    window.location.href = "./index.html";
    console.log('true');
});

