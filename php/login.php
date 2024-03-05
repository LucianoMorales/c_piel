<?php

session_start();
include "conexion.php";


$usuario= $_POST['username'];
$pass = $_POST['password'];
$contrasena = hash('sha256', $pass);
$sql = "SELECT * FROM sesion WHERE usuario='$usuario' AND contrasena='$contrasena' AND  id_area=1" ;
$resultado = mysqli_query($con, $sql);
if (mysqli_num_rows($resultado) == 1) {
  $fila = mysqli_fetch_assoc($resultado);
  $nombre_usuario = $fila['nombre_apellido'];
  $rol = $fila['rol'];

  // Guarda el nombre de usuario en una variable de sesión
  $_SESSION['nombre_apellido'] = $nombre_usuario;
  $_SESSION['rol'] = $rol;

    echo "1";
  } else {
    // Los datos son incorrectos, mostramos un mensaje de error
    echo "0";
  }






?>