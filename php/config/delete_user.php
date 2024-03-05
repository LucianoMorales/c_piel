<?php
session_start();
include "../conexion.php";


$idUsuario = $_POST['idUsuario'];

$sql = "DELETE  FROM sesion WHERE id_sesion = $idUsuario";
$resultado = mysqli_query($con, $sql);

// Creación del arreglo con los resultados de la consulta

if ($resultado) {
echo(0);
}
else{
    echo(1);
}

// Devolución del arreglo en formato JSON


// Cierre de la conexión a la base de datos
$con->close();
?>