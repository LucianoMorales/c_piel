<?php

session_start();
include "../conexion.php";

function obtenerNombreMes($fecha) {
  $numero_mes = date('m', strtotime($fecha));
  setlocale(LC_TIME, 'es_ES.UTF-8'); // Configurar la localización para el idioma español
  $nombre_mes = strftime('%B', mktime(0, 0, 0, $numero_mes, 1));
  return $nombre_mes;
}


$result = mysqli_query($con, 'call llamada_fecha');


// Arreglo para almacenar los datos de la consulta
$data = array();

$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
  
 
  


// Cerrar la conexión a la base de datos
mysqli_close($con);

// Devolver los datos en formato JSON
echo json_encode($data);

?>