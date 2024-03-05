<?php
session_start();
include "../conexion.php";


$idUsuario = $_POST['idUsuario'];
$usuario= $_POST['usuario'];
$nombre= $_POST['nombre'];
$contraseña= $_POST['contraseña'];
$contraseña_encrip = hash('sha256', $contraseña);
$rol= $_POST['rol'];

$sql = "UPDATE sesion SET usuario = '$usuario', contrasena = '$contraseña_encrip', nombre_apellido = '$nombre', rol = '$rol' WHERE id_sesion = '$idUsuario'";
$resultado = mysqli_query($con, $sql);


if ($resultado) {
  echo '1';
} else {
  echo '0';
}
mysqli_close($con);
?>
