<?php

session_start();
include "../conexion.php";

// Consulta para obtener los roles
$sql = "SELECT id_rol, tipo FROM rol";
$resultado = mysqli_query($con, $sql);

// Si la consulta fue exitosa, construir las opciones del select
if ($resultado) {
  while ($row = mysqli_fetch_assoc($resultado)) {
    echo "<option value='" . $row['id_rol'] . "'>" . $row['tipo'] . "</option>";
  }
}

// Cerrar la conexión a la base de datos
mysqli_close($con);
?>