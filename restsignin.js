const loginError = document.getElementById('login-error');
document.getElementById('restaraundLoginForm').addEventListener('submit',async function(event){
	event.preventDefault();
	
	let username=document.getElementById('RestaurantuserName').value;
	let password=document.getElementById('RestaurantpassWord').value;
	console.log(username);
		if(username===''){
			loginError.innerHTML = 'Please enter Username';
			loginError.innerHTML.color="red";
		}
		else if(password===''){
			loginError.innerHTML = 'Please enter password.';
			loginError.innerHTML.color="red";
		}else{
		fetch('index.php')
		    .then(response => response.json())
		    .then(restData => {
		      // Find the matching username and password in the adminData
		      console.log(restData);
		      const matchingRest = restData.find(rest => rest.username === username && rest.password === password);
			console.log(matchingRest);
		      if (matchingRest) {
			let loggedInRestData = {
			  username: username,
			  password: password,
			  login_status: 'true',
			};

			// Store the admin data in localStorage
			let existingRestData = localStorage.getItem('restaurantData');
			if (existingRestData) {
			  let parsedExistingRestData = JSON.parse(existingRestData);
			  parsedExistingRestData.login_status = 'true';
			  localStorage.setItem('RestaurantData', JSON.stringify(parsedExistingRestData));
			} else {
			  // Store the admin data in localStorage
			  localStorage.setItem('RestaurantData', JSON.stringify(loggedInRestData));
			}
			window.location.href='register.html';
		      } else {
			// Authentication failed, display an error message
			loginError.innerHTML = 'Invalid username/password.';
			loginError.innerHTML.color="red";
			console.log('invalid');
		      }
		    })
		    .catch(error => {
		      // Handle fetch error (e.g., network issue, PHP script not found)
		      console.error('Error during login:', error);
		    });
	    }
});

document.getElementById("ResbackBtn").addEventListener('click',function(event){
	window.location.href="./index.html";
	console.log('true');
});

