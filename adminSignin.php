<?php
// Database connection details
$servername = "localhost";
$username_db = "root";
$password_db = "";
$database = "sample";

// Create a connection
$connection = mysqli_connect($servername, $username_db, $password_db, $database);

// Check the connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch all data from the admin table
$query = "SELECT * FROM admin";
$result = mysqli_query($connection, $query);

// Convert the data to an associative array
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Close the database connection
mysqli_close($connection);

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>

