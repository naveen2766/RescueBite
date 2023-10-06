//===========================================================================//
const loginBtn = document.getElementById("LoginBtn");
const signUpBtn = document.getElementById("signUpBtn");

let adminData = localStorage.getItem("adminData");
let parsedadminData = JSON.parse(adminData);

let restData=localStorage.getItem("RestaurantData");
let parsedRestData = JSON.parse(restData);

let donateButtonEl=document.getElementById("donateButton");
document.addEventListener("DOMContentLoaded", function() {
    if (parsedadminData && parsedadminData.login_status === 'true' && parsedadminData.username) {
        let urUsername = document.getElementById('your_username');
        urUsername.textContent = parsedadminData.username;
        //loginBtn.style.display='none';
        let donatefood=document.getElementById("donatefood")
        donatefood.style.display='none';
        
         let yourDonations=document.getElementById("yourDonations")
        yourDonations.style.display='none';
        
        loginBtn.textContent="Requests";
        signUpBtn.style.display='none';
        
        donateButtonEl.style.display='none';
    }else if(parsedRestData && parsedRestData.login_status === 'true' && parsedRestData.username){
        let urUsername = document.getElementById('your_username');
        urUsername.textContent = parsedRestData.username;
        loginBtn.style.display='none';
        signUpBtn.style.display='none';

    }
});
//==============================================================================//
loginBtn.addEventListener('click', function(){
	if (parsedadminData && parsedadminData.login_status === 'true' && parsedadminData.username) {
		window.location.href='donationrequest.html';
	}else{
		window.location.href='adminLogin.html';
	}
});
//============================================================================//
document.getElementById('logout').addEventListener('click', function() {
    // Update adminData.login_status to false
    if (parsedadminData.login_status==='true') {
        parsedadminData.login_status = 'false';
        localStorage.setItem('adminData', JSON.stringify(parsedadminData));
        let urUsername = document.getElementById('your_username');
        urUsername.textContent = 'Your Username';
    }else if(parsedRestData.login_status==='true'){
    	parsedRestData.login_status = 'false';
        localStorage.setItem('RestaurantData', JSON.stringify(parsedRestData));
        let urUsername = document.getElementById('your_username');
        urUsername.textContent = 'Your Username';
    }
    window.location.reload();
});

//===========================================================================//
function toggleDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//==============================================================================//

donateButtonEl.addEventListener('click',()=>{
	restData = localStorage.getItem("RestaurantData");
	parsedRestData = JSON.parse(restData);
	console.log('here only');
	console.log(parsedRestData.login_status);
	if (parsedRestData.username && parsedRestData.login_status === "true") {
	    window.location.href = 'register.html';
	} else {
	    window.location.href = 'restaurantsigninpage.html';
	}

});
//====================================================================================
document.getElementById('donatefood').addEventListener('click',()=>{
	restData = localStorage.getItem("RestaurantData");
	parsedRestData = JSON.parse(restData);
	console.log('here only');
	console.log(parsedRestData.login_status);
	if (parsedRestData.username && parsedRestData.login_status === "true") {
	    window.location.href = 'register.html';
	} else {
	    window.location.href = 'restaurantsigninpage.html';
	}

});
//=================================================================================//
function fetchDonations(username) {
    // Fetch donations from the server using the provided username
    fetch(`get_donations.php?username=${encodeURIComponent(username)}`)
        .then(response => response.json())
        .then(donations => {
            // Process and display the donations
            console.log(donations);
            // Replace with your logic to display donations
        })
        .catch(error => {
            console.error('Error fetching donations:', error);
        });
}


document.getElementById("yourDonations").addEventListener('click',()=>{
	let data=JSON.parse(localStorage.getItem("RestaurantData"));
	if(data.username && data.login_status==="true"){
		window.location.href="yourdonation.html";
	}else{
		window.reload();
	}
	
});
//==========================================================================================
