// yourdonation.js

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const data = localStorage.getItem('RestaurantData')
          const parsedData=JSON.parse(data);
          let username=parsedData.username;
          console.log(username);
          let status=parsedData.login_status;

        if (status==="true") {
            // Fetch donation data based on the username
            const response = await fetch(`yourdonation.php?username=${encodeURIComponent(username)}`);
            const donations = await response.json();
            
            // Display the donation data
            const donationList = document.getElementById('donation-list');
            donationList.innerHTML = ''; // Clear previous content
            
            if (donations.length > 0) {
            console.log(donations);
                        `<h3>${username}</h3>`
                donations.forEach(donation => {
                    const donationItem = document.createElement('div');
                    donationItem.classList.add('donation-item');
                    donationItem.innerHTML = `
                        <p>Name: ${donation.name}</p>
                        <p>Email: ${donation.email}</p>
                        <p>Phone Number: ${donation.phone_no}</p>
                        <p>Address: ${donation.address}</p>
                        <p>Category: ${donation.category}</p>
                        <p>Date: ${donation.datetime}</p>
                        <p>Spectial Note: ${donation.special_note}</p>
                        <p>Request Status: ${donation.request_status}</p>
                    `;
                    donationList.appendChild(donationItem);
                });
            } else {
                donationList.innerHTML = '<p>No donations found.</p>';
            }
        } else {
            console.error('Username not found in local storage.');
        }
    } catch (error) {
        console.error('Error fetching donations:', error);
    }
});

