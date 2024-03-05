<?php

session_start();
include "conexion.php";

// Consulta SQL
$sql = "SELECT id_estado_civil, estado_civil FROM estado_civil";
$resultado = mysqli_query($con, $sql);

// Creación del arreglo con los resultados de la consulta
$estado_civil = array();
if (mysqli_num_rows($resultado) > 0) {
  while  ($fila = mysqli_fetch_assoc($resultado)) {
    $estado_civil[] = $fila;
  }
}

// Devolución del arreglo en formato JSON
echo json_encode($estado_civil);

// Cierre de la conexión a la base de datos
$con->close();
?>