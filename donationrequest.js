window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem("Key", "Value");
  // Function to fetch and display donation requests
  function displayDonationRequests() {
    fetch('donationrequest.php')
      .then(response => response.json())
      .then(data => {
        const donationRequestsDiv = document.getElementById('donationRequests');
        donationRequestsDiv.innerHTML = '';
        data.forEach(request => {
          if (request.request_status !== 'deleted' && request.request_status !== 'collected') {
            const recordDiv = document.createElement('div');
            recordDiv.classList.add('donation-record');

            let statusBtns = '';

            if (request.request_status === 'processing') {
              statusBtns = `<button class="accepted-btn" data-id="${request.id}" data-status="accepted" name="accepted">Mark as Accepted</button>`;
            } else if (request.request_status === 'accepted') {
              statusBtns = `<button class="collected-btn" data-id="${request.id}" data-status="collected" name="Collected">Mark as Collected</button>`;
            }

            statusBtns += `<button class="delete-btn" data-id="${request.id}" data-status="deleted">Delete Record</button>`;
		console.log(request.datetime);
            recordDiv.innerHTML = `
              <p><strong>Username:</strong> ${request.username}</p>
              <p><strong>Name:</strong> ${request.name}</p>
              <p><strong>Email:</strong> ${request.email}</p>
              <p><strong>Phone No.:</strong> ${request.phone_no}</p>
              <p><strong>Address:</strong> ${request.address}</p>
              <p><strong>Category:</strong> ${request.category}</p>
              <p><strong>Quantity:</strong> ${request.quantity} Kg</p>
              <p><strong>Date and Time:</strong> ${request.datetime}</p>
              <p><strong>Special Note:</strong> ${request.special_note}</p>
              <div>${statusBtns}</div>
            `;
            donationRequestsDiv.appendChild(recordDiv);
          }
        });
      })
      .catch(error => console.error('Error fetching donation requests:', error));
  }

  // Function to handle button clicks
  function handleButtonClick(event) {
    const btn = event.target;
    const id = btn.getAttribute('data-id');
    const status = btn.getAttribute('data-status');

    // Update status via AJAX
    fetch('update_status.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `id=${id}&status=${status}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href="donationrequest.html";
          
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error('Error updating status:', error));
  }

  // Function to handle delete confirmation
  /*function handleDeleteConfirmation(event) {
    const recordDiv = event.target.closest('.donation-record');
    const deleteConfirmation = recordDiv.querySelector('.delete-confirmation');

    deleteConfirmation.style.display = 'block';

    // Remove the delete confirmation after 3 seconds
    setTimeout(() => {
      deleteConfirmation.style.display = 'none';
    }, 3000);
  }*/

  document.getElementById('donationRequests').addEventListener('click', event => {
    const btn = event.target;

    if (btn.classList.contains('accepted-btn') || btn.classList.contains('collected-btn') || btn.classList.contains('delete-btn')) {
      handleButtonClick(event);

      /*if (btn.classList.contains('delete-btn')) {
        handleDeleteConfirmation(event);
      }*/
    }
  });

  // Initial display of donation requests
  displayDonationRequests();
});

