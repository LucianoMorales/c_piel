<?php
include "conexion.php";
$dato = json_decode(file_get_contents('php://input'), true);
// if($_SERVER['REQUEST_METHOD']=='POST'){
$cedula=$dato['cedula'];


  // Mostrar los resultados de la búsqueda en una tabla
  $resultado = mysqli_query($con,"SELECT paciente.id_paciente, nombre, apellido,sexo,edad,provincia,distrito,referente,alergico,ahf,app,aqt,medicamento
  FROM paciente INNER JOIN alergias ON paciente.id_paciente = alergias.id_paciente INNER JOIN modulo_paciente ON paciente.id_paciente = modulo_paciente.id_paciente  where cedula = '$cedula' and modulo_c_piel='si'");
  
  // Ejecutar la consulta y obtener el resultado
  
  
  if (mysqli_num_rows($resultado) > 0) {
    // Mostrar los resultados de la búsqueda en una tabla
    while ($fila = mysqli_fetch_assoc($resultado)) {
  
  
      echo "<tr style='background:#F2F4F4'>" .
          
          "<td>" . $fila["nombre"] . " " . $fila["apellido"] . "</td>" .
          "<td>" . $fila["sexo"] . "</td>" .
          "<td>" . $fila["edad"] . "</td>" .
          "<td>" . $fila["provincia"] . "</td>" .
          "<td>" . $fila["distrito"] . "</td>" .
          "<td>" . $fila["referente"] . "</td>" .
          "<td>" . $fila["alergico"] . "</td>" .
          "<td>" . $fila["ahf"] . "</td>" .
          "<td>" . $fila["app"] . "</td>" .
          "<td>" . $fila["aqt"] . "</td>" .
          "<td>" . $fila["medicamento"] . "</td>" .
          "</tr>";
  }
  
  
  } else {
    echo "<tr border:1px><td colspan=12' style='text-align:center; background:#F2F4F4; color:red'> **** Paciente no encontrado ****</td></tr>";
  
  }

// Cierre de la conexión a la base de datos
$con->close();


?>