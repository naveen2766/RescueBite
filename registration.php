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
// Retrieve the form data
if (isset($_POST['submit'])) {
    $selectedUsername = $_POST['username'];
    $restaurantName = $_POST['restarauntName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the selected username is already present in the restaurant table
    $checkQuery = "SELECT * FROM restaurant WHERE username = '$selectedUsername'";
    $checkResult = mysqli_query($connection, $checkQuery);

    if (mysqli_num_rows($checkResult) > 0) {
        // Username already exists, show error message
        echo "Username already exists!";
        header("refresh:2;url=registration.html");
    } else {
        // Insert the data into the restaurant table
        $insertQuery = "INSERT INTO restaurant (username, restaurant_name, email, login_status ,password) VALUES ('$selectedUsername', '$restaurantName', '$email','false' ,'$password')";
        $insertResult = mysqli_query($connection, $insertQuery);

        if ($insertResult) {
            // Registration successful, show success message
            echo "Registration successful, login to donate food";
            // Redirect to the homepage after 5 seconds
            header("Location: registraionsuccess.html");
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

