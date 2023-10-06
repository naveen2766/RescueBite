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

// Retrieve username from query parameter
$username = $_GET['username'];

// Fetch donation data from the database based on the username
$query = "SELECT * FROM donation_request WHERE username = '$username'";
$result = mysqli_query($connection, $query);

$donations = array();
while ($row = mysqli_fetch_assoc($result)) {
    $donations[] = $row;
}

// Close the database connection
mysqli_close($connection);

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($donations);
?>

