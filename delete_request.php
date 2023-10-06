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
//header
    if (isset($_POST['id'])) {
        $id = $_POST['id'];

        // Delete the request from the donation_request table
        $deleteQuery = "DELETE FROM donation_request WHERE id='$id'";
        $deleteResult = mysqli_query($connection, $deleteQuery);

        if ($deleteResult) {
            $response = array('success' => true, 'message' => 'Request deleted successfully.');
        } else {
            $response = array('success' => false, 'message' => 'Error deleting request: ' . mysqli_error($connection));
        }
    } else {
        $response = array('success' => false, 'message' => 'Missing parameter: id.');
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

