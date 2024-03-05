<?php
include "conexion.php";

// Recibe los datos que envía AJAX
$fecha_i= $_POST['fecha_i'];
$fecha_f= $_POST['fecha_h'];
$si="si";

// Validación de los datos recibidos

// Inserta los datos en la base de datos
// Consulta 1: Seguro y cantidad
$query1 = "SELECT seguro, COUNT(*) AS cantidad FROM paciente INNER JOIN modulo_paciente ON paciente.id_paciente = modulo_paciente.id_paciente  WHERE modulo_paciente.modulo_c_piel='si' and fecha_ingreso BETWEEN '$fecha_i' AND '$fecha_f'  GROUP BY seguro";
$result1 = $con->query($query1);

// Consulta 2: Sexo y cantidad
$query2 = "SELECT sexo, COUNT(*) AS cantidad FROM paciente INNER JOIN modulo_paciente ON paciente.id_paciente = modulo_paciente.id_paciente  WHERE modulo_paciente.modulo_c_piel='si' and fecha_ingreso BETWEEN '$fecha_i' AND '$fecha_f'   GROUP BY sexo";
$result2 = $con->query($query2);

// Consulta 3: rango de edades
$query3 = "SELECT CASE
  WHEN edad >= 0 AND edad <= 10 THEN '0-10'
  WHEN edad > 10 AND edad <= 20 THEN '11-20'
  WHEN edad > 20 AND edad <= 30 THEN '21-30'
  WHEN edad > 30 AND edad <= 40 THEN '31-40'
  WHEN edad > 40 AND edad <= 50 THEN '41-50'
WHEN edad > 50 AND edad <= 60 THEN '51-60'
 WHEN edad > 60 AND edad <= 70 THEN '61-70'
  WHEN edad > 70 AND edad <= 80 THEN '41-80'
  WHEN edad > 80 AND edad <= 90 THEN '81-90'
  WHEN edad > 90 AND edad <= 100 THEN '91-100'
END AS rango_edad,
COUNT(*) as cantidad
FROM paciente INNER JOIN modulo_paciente ON paciente.id_paciente = modulo_paciente.id_paciente  WHERE modulo_paciente.modulo_c_piel='si' and  fecha_ingreso BETWEEN '$fecha_i' AND '$fecha_f' 
GROUP BY rango_edad;
";
$result3 = $con->query($query3);

$query4 = "SELECT biopsia, COUNT(*) AS cantidad FROM informe_medico where fecha_informe BETWEEN '$fecha_i' AND '$fecha_f' GROUP BY biopsia;";
$result4 = $con->query($query4);

$query5 = "SELECT 
SUM(CASE WHEN queretosis_seborreica = 1 THEN 1 ELSE 0 END) AS count_queretosis_seborreica,
SUM(CASE WHEN queratosis_actinica = 1 THEN 1 ELSE 0 END) AS count_queratosis_actinica,
SUM(CASE WHEN carcinoma_basocelular = 1 THEN 1 ELSE 0 END) AS count_carcinoma_basocelular,
SUM(CASE WHEN celulas_escamosas = 1 THEN 1 ELSE 0 END) AS count_celulas_escamosas,
SUM(CASE WHEN lunar_diplastico = 1 THEN 1 ELSE 0 END) AS count_lunar_diplastico,
SUM(CASE WHEN lunar_congenito = 1 THEN 1 ELSE 0 END) AS count_lunar_congenito,
SUM(CASE WHEN pterigion = 1 THEN 1 ELSE 0 END) AS count_pterigion,
SUM(CASE WHEN melanoma = 1 THEN 1 ELSE 0 END) AS count_melanoma,
SUM(CASE WHEN otro = 1 THEN 1 ELSE 0 END) AS count_otro
FROM diagnostico inner join informe_medico on informe_medico.id_informe = diagnostico.id_informe where fecha_informe BETWEEN '$fecha_i' AND '$fecha_f';";
$result5 = $con->query($query5);


$query6 = "SELECT provincia, COUNT(*) AS cantidad FROM paciente INNER JOIN modulo_paciente ON paciente.id_paciente = modulo_paciente.id_paciente  WHERE modulo_paciente.modulo_c_piel='si' and   fecha_ingreso BETWEEN '$fecha_i' AND '$fecha_f'  GROUP BY provincia;";
$result6 = $con->query($query6);

$query7 = "SELECT referente, COUNT(*) AS cantidad
FROM paciente INNER JOIN modulo_paciente ON paciente.id_paciente = modulo_paciente.id_paciente  WHERE modulo_paciente.modulo_c_piel='si' and 
 fecha_ingreso  BETWEEN '$fecha_i' AND '$fecha_f' 
GROUP BY referente;";
$result7 = $con->query($query7);

// Crear un array para almacenar los resultados
$data = array();

// Procesar los resultados de la consulta 1
if ($result1->num_rows > 0) {
    $consulta1 = array();
    while ($row = $result1->fetch_assoc()) {
        $consulta1[] = $row;
    }
    $data["consulta1"] = $consulta1;
}

// Procesar los resultados de la consulta 2
if ($result2->num_rows > 0) {
    $consulta2 = array();
    while ($row = $result2->fetch_assoc()) {
        $consulta2[] = $row;
    }
    $data["consulta2"] = $consulta2;
}

if ($result3->num_rows > 0) {
    $consulta3 = array();
    while ($row = $result3->fetch_assoc()) {
        $consulta3[] = $row;
    }
    $data["consulta3"] = $consulta3;
}
if ($result4->num_rows > 0) {
    $consulta4 = array();
    while ($row = $result4->fetch_assoc()) {
        $consulta4[] = $row;
    }
    $data["consulta4"] = $consulta4;
}
if ($result5->num_rows > 0) {
    $consulta5 = array();
    while ($row = $result5->fetch_assoc()) {
        $consulta5[] = $row;
    }
    $data["consulta5"] = $consulta5;
}
if ($result6->num_rows > 0) {
    $consulta6 = array();
    while ($row = $result6->fetch_assoc()) {
        $consulta6[] = $row;
    }
    $data["consulta6"] = $consulta6;
}
if ($result7->num_rows > 0) {
    $consulta7 = array();
    while ($row = $result7->fetch_assoc()) {
        $consulta7[] = $row;
    }
    $data["consulta7"] = $consulta7;
}
// Cerrar la conexión a la base de datos
$con->close();

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($data);

?>