<?php
require 'function.php';

$login = new Login();

if(isset($_POST['submit'])) {
    $result = $login->login($_POST['usernameemail'], $_POST['password']);

    if ($result == 1) {
        $_SESSION['login'] = true;
        $_SESSION['id'] = $login->iduser();
        header("Location: index.php");
    } elseif ($result == 10) {
        echo "<script>alert('Password Salah');</script>";
    } elseif ($result == 100) {
        echo "<script>alert('Username atau Email Tidak Ditemukan');</script>";
    }
}
?>

