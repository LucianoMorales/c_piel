<?php
session_start();
include "../conexion.php";


$idUsuario = $_POST['idUsuario'];

$sql = "SELECT usuario, tipo ,nombre_apellido, id_rol from sesion inner join rol on sesion.rol = rol.id_rol where id_sesion='$idUsuario'";
$resultado = mysqli_query($con, $sql);

// Creación del arreglo con los resultados de la consulta
$datos = array();
if ($resultado) {
 $row= mysqli_fetch_assoc($resultado);
 $datos['usuario'] = $row['usuario'];
 $datos['tipo'] = $row['tipo'];
 $datos['nombre_apellido'] = $row['nombre_apellido'];
 $datos['id_rol'] = $row['id_rol'];
}

// Devolución del arreglo en formato JSON
echo json_encode($datos);

// Cierre de la conexión a la base de datos
$con->close();
?>