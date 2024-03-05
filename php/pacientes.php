<?php

session_start();
include "conexion.php";

$datos = json_decode(file_get_contents('php://input'), true);
// if($_SERVER['REQUEST_METHOD']=='POST'){
$cedula=$datos['cedula'];
$nombre=$datos['nombre'];
$apellido=$datos['apellido'];

$seguro = $datos['seguro'];
$sexo = $datos['sexo'];
$estado_civil = $datos['estado_civil'];
$telefono = $datos['telefono'];
$edad = $datos['edad'];
$fecha_nac =$datos['fecha_nac'];
$provincia = $datos['provincia'];
$distrito = $datos['distrito'];
$ocupacion  = $datos['ocupacion'];
$lugar_trabajo = $datos['lugar_trabajo'];
$area_referencia = $datos['area_referencia'];
$alergia = $datos['alergia'];
$ahf = $datos['ahf'];
$app = $datos['app'];
$aqt =$datos['aqt'];
$medicamentos_alergicos = $datos['medicamentos_alergicos'];
$fecha_ingreso =$datos['fecha_ingreso'];


// Realizar la consulta para verificar si la cédula ya existe en la base de datos
$consulta = "SELECT cedula FROM paciente WHERE cedula = ?";
$stmt = mysqli_prepare($con, $consulta);
mysqli_stmt_bind_param($stmt, "s", $cedula);
mysqli_stmt_execute($stmt);
mysqli_stmt_store_result($stmt);
$num_rows = mysqli_stmt_num_rows($stmt);
if ($num_rows > 0) {
    // Si la cédula ya existe, mostrar un mensaje de error
    echo "1";
} else {





$sql = "CALL guardar_pacientes(?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

 // Vincular los parámetros de entrada al procedimiento almacenado
 $stmt = mysqli_prepare($con, $sql);

 mysqli_stmt_bind_param($stmt, "ssssissssssssssssss", $cedula , $nombre, $apellido, $fecha_nac, $edad,$sexo,$telefono,$seguro,$provincia,$distrito,$ocupacion,$estado_civil,$area_referencia,$fecha_ingreso,$alergia,$medicamentos_alergicos,$ahf,$app,$aqt);


 
 // Ejecutar el procedimiento almacenado
 if (mysqli_stmt_execute($stmt)) {
     // Si la consulta se ejecuta correctamente, mostrar un mensaje de éxito
     echo "0";
 } else {
     // Si se produce un error al ejecutar la consulta, mostrar un mensaje de error
     echo "1 - " . mysqli_error($con);
 }
}
 // Cerrar la conexión
 mysqli_close($con);

?>
