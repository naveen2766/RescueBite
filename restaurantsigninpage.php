<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sample";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $query = "SELECT * FROM restaurant WHERE username='$username' AND password='$password'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $updateQuery = "UPDATE restaurant SET login_status = 'true' WHERE username='$username'";
        if ($conn->query($updateQuery) === TRUE) {
            header("Location: homepage.html");
            exit();
        } else {
            echo "Error updating login status: " . $conn->error;
        }
    } else {
        //echo '<script>document.getElementById("errorMsg").innerText = "Invalid username or password";</script>';
        $msg = "You left one or more of the required fields.";
	header("Location:http://localhost/dashboard/naveendharavath/restaurantsigninpage.php?msg=$msg");
    }
}

$conn->close();
?>

