<?php

session_start();
include "conexion.php";
$datos = json_decode(file_get_contents('php://input'), true);

   $cedula=$datos['cedula'];
$fecha_ingreso=$datos['fecha_ingreso'];
$motivo = $datos['motivo'];
$ex_completo = $datos['ex_completo'];
$sobre_cintura = $datos['sobre_cintura'];
$lesion_especifica =$datos['lesion_especifica'];
$quera_seba= $datos['quera_seba'];
$quera_act=$datos['quera_act'];
$carci_baso=$datos['carci_baso'];
$carci_esca=$datos['carci_esca'];
$lunar_disp=$datos['lunar_disp'];
$lunar_conge=$datos['lunar_conge'];
$pteri=$datos['pteri'];
$melanoma=$datos['melanoma'];
$otro=$datos['otro'];
$otro_impresion=$datos['otro_impresion'];
$comentario_impre=$datos['comentario_impre'];
$biopsia=$datos['biopsia'];
$comen_biopsia=$datos['comen_biopsia'];
$comentario_tratam=$datos['comentario_tratam'];
$referencia=$datos['referencia'];
$dataURL=$datos['dataURL'];


  
// Construir la consulta SQL
$sql = "SELECT id_paciente FROM paciente  where cedula = '$cedula'";

// Ejecutar la consulta y obtener el resultado
$result = $con->query($sql);

if (!$result) {
    echo "Error: " . mysqli_error($con);
    exit();
  }


if ($result->num_rows > 0) {
  // Convertir el resultado a un objeto JSON y enviarlo de vuelta
  $row = $result->fetch_assoc();
  $id=$row['id_paciente'];
 


  
  $sql = "call guardar_datos_medicos(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";

// Vincular los parámetros de entrada al procedimiento almacenado
$stmt = mysqli_prepare($con, $sql);

mysqli_stmt_bind_param($stmt, "isssssssiiiiiiiiiiisss", $id , $_SESSION['nombre_apellido'], $motivo, $comentario_tratam, $fecha_ingreso,$comen_biopsia,$biopsia,$referencia,$ex_completo,$sobre_cintura,$lesion_especifica,$quera_seba,$quera_act,$carci_baso,$carci_esca,$lunar_disp,$lunar_conge,$pteri,$melanoma, $otro_impresion, $comentario_impre,$dataURL);



// Ejecutar el procedimiento almacenado
if (mysqli_stmt_execute($stmt)) {
    // Si la consulta se ejecuta correctamente, mostrar un mensaje de éxito
    echo "0";
} else {
    // Si se produce un error al ejecutar la consulta, mostrar un mensaje de error
    echo "1 - " . mysqli_error($con);
}








} else {
  echo "1". mysqli_error($con);
}






mysqli_close($con);

