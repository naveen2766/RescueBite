<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "sample";

$connection = mysqli_connect($servername, $username, $password, $database);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['submit'])) {
    $username = $_POST["username"];
    $name = $_POST["myname"];
    $email = $_POST["myemail"];
    $phone = $_POST["myphone"];
    $address = $_POST["myaddress"];
    $category = $_POST["myfood"];
    $quantity = $_POST["quantity"];
    $datetime = $_POST["foodate"];
    $special_note = $_POST["special_note"];

    $insert_query = "INSERT INTO donation_request (username, name, email, phone_no, address, category, quantity, datetime, special_note, request_status) VALUES ('$username', '$name', '$email', '$phone', '$address', '$category', '$quantity', '$datetime', '$special_note', 'processing')";
        
    $insertResult = mysqli_query($connection, $insert_query);

    if ($insertResult) {
    	 echo '<style>
		body {
		    background-color: blue;
		    color: white;
		    margin: 0;
		    padding: 0;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    min-height: 100vh;
		}
		.data-container {
		    text-align: center;
		    padding: 20px;
		}
	    </style>';
	    echo '<div class="data-container">';
	    echo "<h3>Request has been raised. Our executive team will be reaching out to you soon.</h3>";
	    echo "<h1>Data:</h1>";
	    echo "Username: " . $username . "<br>";
	    echo "Name: " . $name . "<br>";
	    echo "Email: " . $email . "<br>";
	    echo "Phone: " . $phone . "<br>";
	    echo "Address: " . $address . "<br>";
	    echo "Category: " . $category . "<br>";
	    echo "Quantity: " . $quantity . "<br>";
	    echo "Date and Time: " . $datetime . "<br>";
	    echo "Special Note: " . $special_note . "<br><br>";
	    echo "please wait for a moment while we redirect you to homepage.";
	    echo '</div>';
	    header("refresh:5;url=index.html");
    } else {
        echo "Error: " . mysqli_error($connection);
    }
    
}

mysqli_close($connection);
?>

