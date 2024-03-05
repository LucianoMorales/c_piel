<?php

session_start();
include "../../conexion.php";

// Consulta SQL
$resultado = mysqli_query($con, 'SELECT * FROM rol');

// Crear un array para almacenar los datos
$datos = array();

// Recorrer los resultados y agregarlos al array
while ($fila = $resultado->fetch_assoc()) {
  $datos[] = $fila;
}
echo json_encode($datos);
// // Crea un array con los resultados
// $datos = array();
// while ($fila = mysqli_fetch_assoc($resultado)) {
//   $datos[] = $fila;
// }

// // Imprime los resultados en formato JSON
// echo json_encode($datos);
// Cierre de la conexión a la base de datos
$con->close();

?>