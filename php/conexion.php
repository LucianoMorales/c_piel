<?php
$host="localhost:3306";
$user="root";
$pass="";
$db="db_ancec_santiago";
$con =mysqli_connect($host, $user, $pass, $db);

if (!$con) {
    die("Error de conexión: " . mysqli_connect_error());
} else {
  
}
?>

