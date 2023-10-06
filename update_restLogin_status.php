<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$database = "sample";

// Create a connection
$connection = mysqli_connect($servername, $username, $password, $database);
$response = "";

// Check the connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Construct the query
        $insertQuery = "INSERT INTO login_status (username, password, type, login_status) VALUES ('$username', '$password', 'restaurant', 'true')";

        // Execute the query
        if (mysqli_query($connection, $insertQuery)) {
            $response = array("success" => true, "message" => "Inserted successfully");
        } else {
            $response = array("success" => false, "message" => "Error: " . mysqli_error($connection));
        }
    } else {
        $response = array("success" => false, "message" => 'Invalid parameters');
    }
} else {
    $response = array("success" => false, "message" => 'Invalid method requested');
}

// Close the database connection
mysqli_close($connection);

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>

