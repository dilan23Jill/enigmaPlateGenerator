<?php
    session_start();

    $host="localhost";
    $user="root";
    $password="dilan123";
    $database="Enigma";
    $errors = array();

    $db = mysqli_connect($host, $user, $password, $database);

    if(isset($_POST['login_user'])) {
        $dbUsername = mysqli_real_escape_string($db, $_POST['username']);
        $dbPassword = mysqli_real_escape_string($db, $_POST['password']);

        if(empty($dbUsername)){
            array_push($errors, "Username is required");
        }
        if(empty($dbPassword)){
            array_push($errors, "Password is required");
        }

        if(count($errors) == 0){
            $query = "SELECT * FROM Users WHERE username='$dbUsername' AND password='$dbPassword'";
            $results = mysqli_query($db, $query);
            if(mysqli_num_rows($results) == 1){
                $_SESSION['username'] = $dbUsername;
                header('location: index.php');
            }else{
                array_push($errors, "Wrong username/password");
            }
        }
    }
?>