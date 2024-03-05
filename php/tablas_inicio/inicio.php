<?php

session_start();
include "../conexion.php";

// Consulta SQL
$resultado = mysqli_query($con, "SELECT cedula,nombre,apellido,edad,telefono,sexo, modulo_c_piel, modulo_c_mama from paciente inner join modulo_paciente on paciente.id_paciente = modulo_paciente.id_paciente where modulo_C_piel ='si'" );

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

// // Crea un array con los resultados
// $datos = array();
// while ($fila = mysqli_fetch_assoc($resultado)) {
//   $datos[] = $fila;
// }

// // Imprime los resultados en formato JSON
// echo json_encode($datos);
// Cierre de la conexión a la base de datos
$con->close();

?>