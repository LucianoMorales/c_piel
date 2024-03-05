<?php
session_start();
include "../conexion.php";
$cedula_agg = $_POST['cedula'];
$departamento_c_mama ="si";
$departamento_c_piel="no";

$query = "SELECT cedula, nombre, apellido,modulo_c_mama,modulo_c_piel from paciente  inner join modulo_paciente on paciente.id_paciente = modulo_paciente.id_paciente where modulo_c_mama = '$departamento_c_mama' and modulo_c_piel='no'";
$resultado = mysqli_query($con, $query);


$respuesta = array();
// Verifica si la consulta fue exitosa
if ($resultado) {
    // Obtiene el total de registros
 while($fila = mysqli_fetch_assoc($resultado))   {
    // $totalRegistros = $fila['total'];
    // $respuesta['informe']=$totalRegistros;
    $cedula = $fila['cedula'];
 $nombre =$fila['nombre'];
 $apellido = $fila['apellido'];
    if ($cedula==$cedula_agg){

echo("El Paciente <strong>". $nombre ." ". $apellido. " </strong> con cédula <strong>" . $cedula."</strong> " );

    }
    else{
     
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
