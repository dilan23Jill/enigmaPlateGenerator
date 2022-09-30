<?php
 session_start();

 if (!isset($_SESSION['username'])) {
  $_SESSION['msg'] = "You have to log in first";
  header('location: login.php');
}

exec("/opt/homebrew/bin/python3 /Users/dilan/Documents/Enigma/enigmaPlateGeneratorV2/script/python.py");


