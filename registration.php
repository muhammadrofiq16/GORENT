<?php
require 'function.php';

if(isset($_SESSION['id'])) {
    header("Location: index.php");
}

$register = new Register();

if (isset($_POST['submit'])) {
    $result = $register->registration($_POST['name'], $_POST['username'], $_POST['email'], $_POST['password'], $_POST['confirmpassword']);
    if ($result == 1) {
        echo "<script>alert('Registration successful!');</script>";
    } elseif ($result == 10) {
        echo "<script>alert('Username or Email Has Already Taken');</script>";
    } elseif ($result == 100) {
        echo "<script>alert('Password Does Not Match');</script>";
    }
}
?>

