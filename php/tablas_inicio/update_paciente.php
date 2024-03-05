<?php
session_start();
include "../conexion.php";
$cedula_agg = $_POST['cedula'];
$modulo_c_piel = "si";

$query = "SELECT id_paciente from paciente  where cedula='$cedula_agg'";
$resultado = mysqli_query($con, $query);

$respuesta = array();
// Verifica si la consulta fue exitosa
if ($resultado) {
    // Obtiene el total de registros
 while($fila = mysqli_fetch_assoc($resultado))   {
    // $totalRegistros = $fila['total'];
    // $respuesta['informe']=$totalRegistros;
    $id_paciente = $fila['id_paciente'];

   $query2="UPDATE modulo_paciente SET modulo_c_piel = '$modulo_c_piel' WHERE id_paciente ='$id_paciente'";

//    $resultado2 = mysqli_query($con, $query);

   $resultado2 = $con->query($query2);
 
   if (!$resultado2) {
     echo "Error: " . mysqli_error($con);
     exit();
   }
   else{
    echo("1");
   }

    
 
 }

}
else{
    echo("0");
}


// Cierra la conexión a la base de datos
mysqli_close($con);
// echo json_encode($resultado);
?>
