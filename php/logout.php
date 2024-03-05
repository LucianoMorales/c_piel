<?php
session_start();
unset($_SESSION["nombre_apellido"]);
session_destroy();
header("Location: ../index.html");
?>