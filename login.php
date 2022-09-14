<?php include ('server.php') ?>

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
        <a href="http://"><p id="forgotPsd">Forgot password?</p></a>
    </form>
    
</body>
</html>