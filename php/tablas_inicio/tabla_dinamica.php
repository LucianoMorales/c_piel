<?php

session_start();
include "../conexion.php";
$termino_busqueda = $_POST["miInput"];
// Consulta SQL
$resultado = mysqli_query($con, "SELECT cedula,nombre,apellido,edad,telefono,sexo, modulo_c_piel, modulo_c_mama from paciente  inner join modulo_paciente on paciente.id_paciente = modulo_paciente.id_paciente WHERE  (cedula LIKE '%$termino_busqueda%' OR nombre LIKE '%$termino_busqueda%') ");
  // Mostrar los resultados de la búsqueda en una tabla
  
  while ($fila = mysqli_fetch_assoc($resultado)) {
    echo "<tr>" .
           "<td>" . $fila["cedula"] . "</td>" .
           "<td>" . $fila["nombre"]." ".$fila["apellido"]. "</td>" .
           "<td>" ;
          //  . $fila["edad"] . "</td>" .
          //  "<td>" . $fila["telefono"] . "</td>" .
          //  "<td>" . $fila["sexo"] . "</td>" .
         $piel =$fila["modulo_c_piel"];
          if ($piel=="si"){
            echo "<img src='../image/ganchito.webp' width='20' >";
        
          }
          else{
            echo "<img src='../image/incorrecto.webp' width='20' >";
          }
          echo "</td>";
          echo "<td>";
          if ($fila["modulo_c_mama"]=="si"){
            echo "<img src='../image/ganchito.webp' width=20px >";
          }
          else{
            echo "<img src='../image/incorrecto.webp' width='20' >";
          }
          echo "</td>";
          echo  "</tr>";
  }

// Cierre de la conexión a la base de datos
$con->close();

?>