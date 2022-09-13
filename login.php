<?php

$host="localhost";
$user="root";
$password="dilan123";
$db="Enigma";


$link = mysqli_connect($host, $user, $password, $db);

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$link->close();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/styleLogin.css" />
    <title>Login</title>
</head>
<body>
    <form method="POST" action="index.html" id="loginWindow">
        <img src="img/logo_enigma.png" alt="logo" id="logo">
        <h1>Log in</h1>
        <div class="usr">
            <img src="img/user.png" id="user" alt="user">
        <input type="text" class="text" id="inpUsr" name="logUsername" id="username" placeholder="Username"><br/>
       </div>
       <div class="psd">
        <img src="img/padlock.png" alt="psd" id="paswd">
        <input type="text" class="text" id="inpPas" name="logPassword" id="password" placeholder="Password"><br/>
       </div> 
       <input type="submit" value="LOGIN" id="submit">
        <a href="http://"><p id="forgotPsd">Forgot password?</p></a>
    </form>
    
</body>
</html>