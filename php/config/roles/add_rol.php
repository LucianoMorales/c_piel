<?php
include "../../conexion.php";

// Recibe los datos que envía AJAX

$rol = $_POST['rol'];

// Validación de los datos recibidos

// Inserta los datos en la base de datos
$sql = "INSERT INTO rol (tipo) VALUES ('$rol')";
$resultado = mysqli_query($con, $sql);

if($resultado) {
 echo ("0");

} else {
 echo("1");
}

// Cierra la conexión a la base de datos
$con->close();
?>