<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sample";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data from JavaScript
$data = json_decode(file_get_contents("php://input"));

$username = $conn->real_escape_string($data->username);
$password = $conn->real_escape_string($data->password);
$type=$conn->real_escape_string($data->type);
$status = $conn->real_escape_string($data->login_status);

// Insert data into the login_status table
$sql = "INSERT INTO login_status (username, password, type,login_status) VALUES ('$username', '$password','restaurant' ,'true')";

if ($conn->query($sql) === TRUE) {
    $response = array("status" => "success");
} else {
    $response = array("status" => "error", "message" => $conn->error);
}

$conn->close();

// Return response to JavaScript
header('Content-Type: application/json');
echo json_encode($response);
?>

