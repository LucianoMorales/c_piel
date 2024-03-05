<?php
session_start();
include "../../conexion.php";


$idUsuario = $_POST['idUsuario'];

$sql = "SELECT tipo from rol where id_rol='$idUsuario'";
$resultado = mysqli_query($con, $sql);

// Creación del arreglo con los resultados de la consulta
$datos = array();
if ($resultado) {
 $row= mysqli_fetch_assoc($resultado);
 $datos['tipo'] = $row['tipo'];

}

// Devolución del arreglo en formato JSON
echo json_encode($datos);

// Cierre de la conexión a la base de datos
$con->close();
?>