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

// Fetch donation requests
$sql = "SELECT * FROM donation_request";
$result = mysqli_query($connection, $sql);

$donationRequests = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $donationRequests[] = $row;
    }
}

// Close the database connection
mysqli_close($connection);

// Send the donation requests data as JSON response
header('Content-Type: application/json');
echo json_encode($donationRequests);
?>

