<?php
// Create a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$database = "mydb";
$conn = mysqli_connect($servername, $username, $password, $database);
echo('working');
// Check the connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

// Get the form data
if (isset($_POST['submit']) && !empty($_POST['submit'])) {

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];

// Insert the data into the database
$sql = "INSERT INTO person (name, email) VALUES ('$name', '$email')";
if (mysqli_query($conn, $sql)) {
	echo "Data inserted successfully";
	header("Location: index.html");
    exit();
} else {
echo "Error inserting data: " . mysqli_error($conn);
}

}
// Close the connection to the database
mysqli_close($conn);
?>

