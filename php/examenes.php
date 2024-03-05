<?php

session_start();
include "conexion.php";
$cedula = $_POST['cedula'];
$peso = $_POST['peso'];
$talla = $_POST['talla'];
$pulso = $_POST['pulso'];
$presion = $_POST['presion'];
$fecha = $_POST['fecha'];
// Escapar los datos para prevenir inyección SQL
$cedula = mysqli_real_escape_string($con, $cedula);

// Realizar la consulta
$query = "SELECT id_paciente FROM paciente WHERE cedula='$cedula'";

$result = mysqli_query($con, $query);

// Verificar si se encontró el paciente
if (mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  $idPaciente = $row['id_paciente'];

  // Realizar la consulta para insertar los datos en la tabla de examenes
  $query1 = "INSERT INTO examenes ( pulso, peso, talla, presion, fecha_examenes, id_paciente)
            VALUES ( '$pulso', '$peso', '$talla', '$presion', '$fecha', '$idPaciente')";
  $resultado=mysqli_query($con, $query1);
if($resultado){
echo("0");
} 

else{
echo("1");
}
}
else {
echo("1");
}



 $con->close();
 


?>