<?php
// Database connection code
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sample";

// Create a connection
$connection = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Assuming you have a mechanism to identify the currently logged-in restaurant
// Get the login_status value for the logged-in restaurant (replace 'current_username' with the actual username of the logged-in restaurant)
$checkQuery = "SELECT login_status FROM restaurant WHERE username = 'current_username'";
$checkResult = mysqli_query($connection, $checkQuery);

if ($checkResult) {
    $row = mysqli_fetch_assoc($checkResult);
    $loginStatus = $row['login_status'];
} else {
    // Error occurred during the query, set default login status as false
    $loginStatus = "false";
}

// Close the database connection
mysqli_close($connection);

// Determine the redirect URL based on login status
if ($loginStatus === "true") {
    // Redirect to register.html if login_status is true
    header("Location: register.html");
    exit();
} else {
    // Redirect to login.html if login_status is not true
    header("Location:restaurantsigninpage.html");
    exit();
}
?>

