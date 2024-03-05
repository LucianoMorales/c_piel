<?php

session_start();
include "conexion.php";
$data = json_decode(file_get_contents('php://input'), true);

 $cedula = $_POST['cedula'];
 
 // Construir la consulta SQL
 $sql = "SELECT cedula, nombre,apellido, fecha_nacimiento,edad,sexo,telefono,seguro, provincia, distrito, ocupacion, estado_civil, referente, fecha_ingreso,
 medicamento, ahf,app,aqt,fecha_informe,nombre_medico,motivo,tratamiento,biopsia_comentario,biopsia,referir,completo,sobre_cintura, lesion_especifica, queretosis_seborreica,queratosis_actinica,carcinoma_basocelular, celulas_escamosas,lunar_diplastico, lunar_congenito, pterigion, melanoma, otro, comentario, img_dataurl
 from  informe_medico inner join tipo_examen on informe_medico.id_informe = tipo_examen.id_informe 
 inner join diagnostico on informe_medico.id_informe = diagnostico.id_informe 
 inner join paciente on informe_medico.id_paciente_medico = paciente.id_paciente 
 inner join alergias on paciente.id_paciente = alergias.id_paciente where cedula='$cedula' ORDER BY fecha_informe DESC";
 
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
 


?>