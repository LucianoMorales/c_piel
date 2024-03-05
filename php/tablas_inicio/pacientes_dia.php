<?php

session_start();
include "../conexion.php";

$fecha = $_POST['fecha'];

// Consulta SQL
$resultado = mysqli_query($con, "SELECT cedula, nombre, apellido, nombre_medico FROM paciente INNER JOIN informe_medico ON paciente.id_paciente = informe_medico.id_paciente_medico WHERE fecha_informe = '$fecha'");

while ($fila = mysqli_fetch_assoc($resultado)) {
  echo "<tr>" .
         "<td>" . $fila["cedula"] . "</td>" .
         "<td>" . $fila["nombre"]." ".$fila["apellido"]. "</td>" .
         "<td>" . $fila["nombre_medico"] . "</td>" .
      
       "</tr>";
}

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