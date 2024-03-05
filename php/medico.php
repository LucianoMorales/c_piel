<?php

session_start();
include "conexion.php";
$data = json_decode(file_get_contents('php://input'), true);
$id=" ";

//-----------------------------------------------------------------
//FUNCION PARA BUSCAR EL PACIENTE QUE SE ATENDERA
//----------------------------------------------------------------


// if (isset($_POST['accion']) && $_POST['accion'] == 'funcion-buscar-cedula') {
 
// $dato = json_decode(file_get_contents('php://input'), true);
// // if($_SERVER['REQUEST_METHOD']=='POST'){
// $cedula=$dato['cedula'];

   
// // Construir la consulta SQL
// $resultado = mysqli_query($con,"SELECT paciente.id_paciente, nombre, apellido,sexo,edad,provincia,distrito,referente,alergico,ahf,app,aqt,medicamento
// FROM paciente INNER JOIN alergias ON paciente.id_paciente = alergias.id_paciente  where cedula = '$cedula'");

// // Ejecutar la consulta y obtener el resultado


// if (mysqli_num_rows($resultado) > 0) {
//   // Mostrar los resultados de la búsqueda en una tabla
//   while ($fila = mysqli_fetch_assoc($resultado)) {


//     echo "<tr style='background:#F2F4F4'>" .
        
//         "<td>" . $fila["nombre"] . " " . $fila["apellido"] . "</td>" .
//         "<td>" . $fila["sexo"] . "</td>" .
//         "<td>" . $fila["edad"] . "</td>" .
//         "<td>" . $fila["provincia"] . "</td>" .
//         "<td>" . $fila["distrito"] . "</td>" .
//         "<td>" . $fila["referente"] . "</td>" .
//         "<td>" . $fila["alergico"] . "</td>" .
//         "<td>" . $fila["ahf"] . "</td>" .
//         "<td>" . $fila["app"] . "</td>" .
//         "<td>" . $fila["aqt"] . "</td>" .
//         "<td>" . $fila["medicamento"] . "</td>" .
//         "</tr>";
// }


// } else {
//   echo "<tr border:1px><td colspan=12' style='text-align:center; background:#F2F4F4; color:red'> **** Paciente no encontrado ****</td></tr>";

// }

// // Cerrar la conexión
// $con->close();
//   }



//---------------------------------------------------------------
//FUNCION PARA BUSCAR DATOS PARA EL HISTORIAL DE LOS PACIENTES
//---------------------------------------------------------------

 
if (isset($_POST['accion']) && $_POST['accion'] == 'historial-clinico') {
  $cedula = $_POST['cedula'];
 
// Construir la consulta SQL
$sql = "SELECT fecha_informe,nombre_medico,motivo,tratamiento,biopsia_comentario,biopsia,referir,completo,sobre_cintura, lesion_especifica, queretosis_seborreica,queratosis_actinica,carcinoma_basocelular, celulas_escamosas,lunar_diplastico, lunar_congenito, pterigion, melanoma, otro, comentario, img_dataurl
from  informe_medico INNER JOIN tipo_examen on informe_medico.id_informe = tipo_examen.id_informe 
INNER JOIN diagnostico on informe_medico.id_informe = diagnostico.id_informe 
INNER JOIN paciente on informe_medico.id_paciente_medico = paciente.id_paciente where cedula='$cedula' ORDER BY fecha_informe DESC";

// Ejecutar la consulta y obtener el resultado
$result = $con->query($sql);

if (!$result) {
  echo "Error: " . mysqli_error($con);
  exit();
}


$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Convertir el resultado a formato JSON y enviarlo al cliente
echo json_encode($data);

// $data = array('fecha_informe' => $row['fecha_informe'], 'nombre_medico' => $row['nombre_medico'],'motivo' => $row['motivo'],'tratamiento' => $row['tratamiento'],'biopsia_comentario' => $row['biopsia_comentario'],'biopsia' => $row['biopsia'],'referir' => $row['referir'],'completo' => $row['completo'],'sobre_cintura' => $row['sobre_cintura'],'lesion_especifica' => $row['lesion_especifica'],'queretosis_seborreica' => $row['queretosis_seborreica'],'queratosis_actinica' => $row['queratosis_actinica'],'carcinoma_basocelular' => $row['carcinoma_basocelular'],'celulas_escamosas' => $row['celulas_escamosas'],'lunar_diplastico' => $row['lunar_diplastico'],'lunar_congenito' => $row['lunar_congenito'],'pterigion' => $row['pterigion'],'melanoma' => $row['melanoma'],'otro' => $row['otro'],'comentario' => $row['comentario']);


//  else {
// echo "1". mysqli_error($con);
// }

// Cerrar la conexión
$con->close();
}

?>