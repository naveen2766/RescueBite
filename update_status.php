<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$database = "sample";

// Create a connection
$connection = mysqli_connect($servername, $username, $password, $database);

// Check the connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['id']) && isset($_POST['status'])) {
        $id = $_POST['id'];
        $status = $_POST['status'];

        // Validate the status to prevent SQL injection
        $validStatuses = array('accepted', 'collected', 'deleted');
        if (in_array($status, $validStatuses)) {
            // Update the status in the donation_request table
            $updateQuery = "UPDATE donation_request SET request_status='$status' WHERE id='$id'";
            $updateResult = mysqli_query($connection, $updateQuery);

            if ($updateResult) {
                $response = array('success' => true, 'message' => 'Status updated successfully.');
            } else {
                $response = array('success' => false, 'message' => 'Error updating status: ' . mysqli_error($connection));
            }
        } else {
            $response = array('success' => false, 'message' => 'Invalid status provided.');
        }
    } else {
        $response = array('success' => false, 'message' => 'Missing parameters: id and/or status.');
    }
} else {
    $response = array('success' => false, 'message' => 'Invalid request method.');
}

// Close the database connection
mysqli_close($connection);

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>

