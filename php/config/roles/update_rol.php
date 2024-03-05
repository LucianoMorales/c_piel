<?php
session_start();
include "../../conexion.php";


$idUsuario = $_POST['idUsuario'];
$rol= $_POST['rol'];



$sql = "UPDATE rol SET tipo = '$rol' WHERE id_rol = '$idUsuario'";
$resultado = mysqli_query($con, $sql);


if ($resultado) {
  echo '0';
} else {
  echo '1';
}
mysqli_close($con);
?>