<?php
  session_start();
  // Verificar si el usuario ha iniciado sesión
  if (!isset($_SESSION['nombre_apellido'])) {
    header('Location: ../index.html');
    exit();
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
    crossorigin="anonymous"
  />

  <!-- google font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bona+Nova&family=Merriweather&display=swap" rel="stylesheet">


  <link href="
  https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.min.css
  " rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="../../style/config/estilo_menu.css">
  <!-- <link rel="stylesheet" type="text/css" href="../../style/estilo_menu_p.css"> -->
  <link rel="stylesheet" href="../../style/config/estilo_buscarpaciente.css" />
 <link rel="stylesheet" href="../../style/config/formulario.css">
 <script src="https://cdn.jsdelivr.net/npm/chart.js@latest/dist/Chart.min.js"></script>
    <title>Panel de control</title>
</head>
<body>
  <div class="contenedor">
    <div class="menu text-center">

      <nav>
  
    <ul>
      <img src="../image/logoancec.png" height="100em" alt="" id="img">
      <button class="buton_seccion" > <a href="user.php"  id="lista" >
          <div class="parte1_icono" >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.969 14.25v-2.531H7.5V10.03H4.969V7.5H3.28v2.531H.75v1.688h2.531v2.531H4.97Z"></path>
              <path d="M13.5 12a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z"></path>
              <path d="M13.5 13.5c-3.254 0-9.75 2.01-9.75 6v3h19.5v-3c0-3.99-6.496-6-9.75-6Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Usuarios</div></a>
        </button>
        <button class="buton_seccion" >
          <a  href="rol.php"  id="lista">
          <div class="parte1_icono">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.125 12a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"></path>
              <path d="M10.969 13.875c-1.32-.67-2.777-.938-3.844-.938-2.09 0-6.375 1.282-6.375 3.844v1.969h7.031v-.753c0-.89.375-1.784 1.032-2.528.523-.595 1.256-1.146 2.156-1.594Z"></path>
              <path d="M15.938 13.5c-2.441 0-7.313 1.508-7.313 4.5v2.25H23.25V18c0-2.992-4.872-4.5-7.313-4.5Z"></path>
              <path d="M15.938 12a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Roles</div>
      </a>
        </button>

        
     
      
          <button class="buton_confa" >
            <a  href="../formulario.php" id="conf">
            <div  class="text-center">
          Regresar
            </div>
            
        </a>
          </button>
        
    </ul> 
 
  </nav>
 
      </div> 
     

    <div class="container " id="menu-container">
      <h4>Usuarios</h4>
    
      <div class="container text-center">
        <div class="row gap-0 column-gap-3">
          <!-- PRIMERA TABLA -->
          
          <div class="col-sm-12 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id ="tabla-paciente" >
       
            <div class="d-flex flex-row-reverse"   id="menu-pac-total" >
              
              <div class="p-2">
              <button type="button" class="btn btn-success"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"  data-bs-toggle="modal" data-bs-target="#agregar">
          Agregar nuevo Usuario
        </button> </div>
              
         
              <div class="flex-grow-1"></div>
              
            </div>
    
            <div class="table-responsive">
              <table class="class= table table-borderless" id="tabla-datos">
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Nombre </th>
                    <th>Rol</th>
                    <th>Acciónes</th>
                
                 
                  </tr>
                </thead>
                <tbody id="tbody">
                  <!-- Los datos se mostrarán aquí -->
                </tbody>
              </table>
            </div>


            
          </div>
       
      
          
        </div>
      </div>


    </div>
  
      <div class=" modal  modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Historial Clínico</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="targeta">
             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
            </div>
          </div>
        </div>
      </div>
  
      <!-- /////////////////////////////////////////////////// -->
      <!-- MODAL PARA EDITAR USUARIOS -->
      <!-- ///////////////////////////////////////////////////////// -->

      <div class="modal fade" id="editar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modificar datos usuarios</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Usuario</label>
                <input type="email" class="form-control" id="usuario_edit" placeholder="">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre y Apellido</label>
                <input type="email" class="form-control" id="nombre_edit" placeholder="">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                <input type="email" class="form-control" id="contraseña_edit" placeholder="Agrege nueva contraseña">
              </div>
              <div class="mb-3">
                <select class="form-select" aria-label="Default select example" id="roles">
                 
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-warning" id="btn_actualizar_edit">Actualizar</button>
            </div>
          </div>
        </div>
      </div>





      <!-- /////////////////////////////////////////////////////////////////
      MODAL PARA ELIMINAR 
    ////////////////////////////////////////////////////////////////-->
    <!-- <div class="modal fade" id="eliminar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminar</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- ///////////////////////////////////////////////////7//// -->
    <!-- MODAL PARA AGREGAR USUARIOS -->
    <!-- ////////////////////////////////////////////////// -->

    <div class="modal fade" id="agregar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Nuevo usuario</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Usuario</label>
              <input type="text" class="form-control" id="usuario_add" placeholder="">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Nombre y Apellido</label>
              <input type="text" class="form-control" id="nombre_add" placeholder="">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
              <input type="text" class="form-control" id="contraseña_add" placeholder="Agrege nueva contraseña">
            </div>
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example" id="roles_add">
               
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success" id="btn_nuevo_usuario">Agregar </button>
          </div>
        </div>
      </div>
    </div>

</body>
<script src="../../jquery/jquery-3.5.1.min.js"></script>
<!-- <script src="../javascript/envio_datos/datos_medico.js"></script> -->

<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
crossorigin="anonymous"
></script>
<script src="
https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.all.min.js
"></script>

<!-- <script src="../javascript/envio_datos/datos_registros.js"></script> -->
<!-- <script src="../javascript/mos_ocul_btn.js"></script> -->
<script src="../../javascript/config/user.js"></script>
<!-- <script src="../javascript/graficos/graficos.js"></script> -->
</html>