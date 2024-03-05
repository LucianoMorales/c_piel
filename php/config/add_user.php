<?php
include "../conexion.php";

// Recibe los datos que envía AJAX
$usuario = $_POST['usuario'];
$nombre = $_POST['nombre'];
$contraseña = $_POST['contraseña'];
$contraseña_encrip = hash('sha256', $contraseña);
$rol = $_POST['rol'];

// Validación de los datos recibidos

// Inserta los datos en la base de datos
$sql = "INSERT INTO sesion (usuario, contrasena, nombre_apellido, rol,id_area) VALUES ('$usuario', '$contraseña_encrip', '$nombre', '$rol',1)";
$resultado = mysqli_query($con, $sql);

if($resultado) {
 echo ("0");

} else {
 echo("1");
}

// Cierra la conexión a la base de datos
$con->close();
?>