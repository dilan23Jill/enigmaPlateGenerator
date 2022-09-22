<?php 
 session_start();

 $host="localhost";
 $user="root";
 $password="dilan123";
 $database="Enigma";
 $errors = array();

 $db = mysqli_connect($host, $user, $password, $database);
 if ($db->connect_error) {
     die("Connection failed: " . $db->connect_error);
   } 
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

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style/styleLogin.css" />
    <title>Login</title>
</head>
<body>
    <form method="POST" action="login.php" id="loginWindow">
        <img src="img/logo_enigma.png" alt="logo" id="logo">
        <h1>Log in</h1>
        <div class="usr">
            <img src="img/user.png" id="user" alt="user">
        <input type="text" class="text" id="inpUsr" name="username" id="username" placeholder="Username"><br/>
       </div>
       <div class="psd">
        <img src="img/padlock.png" alt="psd" id="paswd">
        <input type="password" class="text" id="inpPas" name="password" id="password" placeholder="Password"><br/>
       </div> 
       <input type="submit" value="LOGIN" name="login_user" id="submit">
    </form>
    
</body>
</html>