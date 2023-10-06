<?php
// Database connection code
error_reporting(E_ALL);
ini_set('display_errors', 1);

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
// Retrieve the form data
if (isset($_POST['submit'])) {
    $selectedUsername = $_POST['username'];
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword=$_POST['confirmPassword'];
    $phone_number=$_POST['phone_number'];
    // Check if the selected username is already present in the restaurant table
    $checkQuery = "SELECT * FROM user_table WHERE username = '$selectedUsername'";
    $checkResult = mysqli_query($connection, $checkQuery);

    if (mysqli_num_rows($checkResult) > 0) {
        // Username already exists, show error message
        echo "Username already exists!";
        header("refresh:2;url=registration.html");
    }else if($confirmPassword!= $password){
    	echo "please enter correct password";
    	header("refresh:2;url=registration.html");
    } else {
        // Insert the data into the restaurant table
        $insertQuery = "INSERT INTO user_table (username, name, email, phone_number ,password) VALUES ('$selectedUsername', '$userName', '$email','$phone_number','$password')";
        $insertResult = mysqli_query($connection, $insertQuery);

        if ($insertResult) {
            // Registration successful, show success message
            echo "Registration successful, login to donate food";
            // Redirect to the homepage after 5 seconds
            //header("Location: registraionsuccess.html");
            //header("refresh:5;url=index.html");
            exit();
        } else {
            // Error occurred during insertion
            echo "Error: " . mysqli_error($connection);
        }
    }
}

// Close the database connection
mysqli_close($connection);
?>

