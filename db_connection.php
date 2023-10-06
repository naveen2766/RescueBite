<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sample";

// Create a database connection
$connection = mysqli_connect($servername, $username, $password, $dbname);

// Check the connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
