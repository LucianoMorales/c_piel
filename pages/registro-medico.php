<?php
  session_start();

  // Verificar si el usuario ha iniciado sesión
  if (!isset($_SESSION['nombre_apellido'])) {
    header('Location: ../index.html');
    exit();
  }
  if (!isset($_SESSION['rol'])) {
    $_SESSION['rol'] = 1; // Asigna un valor predeterminado si es necesario
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
  <link href="
  https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.min.css
  " rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="../style/estilo_menu.css">
  <link rel="stylesheet" type="text/css" href="../style/estilo_menu_p.css">
  <link rel="stylesheet" href="../style/estilo_buscarpaciente.css" />
 
    <title>Registro médico</title>
</head>
<body>

<div class="container-fluid-xl">
      <div class="menu-vertical-principal">
       
        <div class="dropdown">

       
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="boton-configuracion">
            <svg width="25" height="25" id="configuracion"  fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
              <path d="m22.05 14.063-.023-.018-1.479-1.16a.756.756 0 0 1-.286-.625v-.542a.75.75 0 0 1 .287-.62l1.479-1.16.022-.018a1.251 1.251 0 0 0 .276-1.597L20.324 4.86a1.259 1.259 0 0 0-1.527-.54l-.017.006-1.739.7a.747.747 0 0 1-.678-.06 8.417 8.417 0 0 0-.469-.275.747.747 0 0 1-.383-.554l-.262-1.856-.006-.034a1.276 1.276 0 0 0-1.239-1.027H9.996a1.262 1.262 0 0 0-1.24 1.05l-.004.026-.262 1.86a.75.75 0 0 1-.38.553 8.21 8.21 0 0 0-.47.273.746.746 0 0 1-.676.06l-1.74-.704-.017-.006a1.26 1.26 0 0 0-1.522.531l-.006.01L1.674 8.34a1.252 1.252 0 0 0 .276 1.598l.023.018 1.479 1.16a.755.755 0 0 1 .286.625v.542a.75.75 0 0 1-.287.62l-1.478 1.16-.023.018a1.25 1.25 0 0 0-.276 1.597l2.002 3.464a1.258 1.258 0 0 0 1.527.54l.017-.006 1.737-.7a.747.747 0 0 1 .678.06c.154.098.31.19.47.275a.747.747 0 0 1 .383.554l.26 1.856.006.034a1.275 1.275 0 0 0 1.242 1.027h4.008a1.262 1.262 0 0 0 1.24-1.05l.005-.026.26-1.86a.75.75 0 0 1 .384-.553 8.32 8.32 0 0 0 .469-.273.747.747 0 0 1 .676-.06l1.74.701.017.007a1.26 1.26 0 0 0 1.529-.542l2.002-3.464a1.251 1.251 0 0 0-.276-1.598Zm-6.304-1.887a3.75 3.75 0 1 1-3.922-3.922 3.76 3.76 0 0 1 3.922 3.922Z"></path>
           </svg>
          </button>
        
          <ul class="dropdown-menu">
          <?php if ($_SESSION["rol"] == 1) {?>
            <li><a class="dropdown-item" href="config/user.php"> <span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m23.303 5.22-3.8 3.79-2.278-2.27 3.801-3.788c-2.12-1.03-5.093-1.035-6.853.72-1.655 1.65-1.862 4.247-1.056 6.29l-8.45 8.383a.563.563 0 0 0 0 .797l2.45 2.442a.563.563 0 0 0 .797 0l8.438-8.46c2.023.76 4.594.545 6.222-1.079 1.758-1.755 1.754-4.703.73-6.825Z"></path>
                <path d="m17.13 14.469-3.366 3.375 3.54 3.746a.51.51 0 0 0 .734.01l2.812-2.834a.518.518 0 0 0-.011-.736l-3.708-3.561Z"></path>
                <path d="M5.578 9.937c0-.228-.188-.437-.35-.599l-.011-.011-.073-.07a.05.05 0 0 1-.012-.037.758.758 0 0 1 .446-.093c.06.006.278.042.582.23.158.098 1.53 1.417 2.059 1.908a.516.516 0 0 0 .007.72l.348.367 3.078-3.054-.387-.368a.51.51 0 0 0-.718-.003C9.47 7.77 9.187 7.266 9.094 6.937c-.207-.725.194-1.312.656-1.687.274-.217.838-.379 1.36-.422a2.47 2.47 0 0 1 .544.028c.163.024.295.054.346.066.177.048.35.11.516.187l.563-.89a4.142 4.142 0 0 0-.629-.83 5.391 5.391 0 0 0-.243-.239c-.365-.335-1.312-.9-2.559-.9-.72 0-1.433.14-2.098.413-1.755.72-2.901 1.7-3.427 2.22l-.004.003a10.29 10.29 0 0 0-.979 1.14c-.25.353-.224.742-.205 1 0 .015 0 .032.003.047a.863.863 0 0 0-1.11.086L.093 8.888a.318.318 0 0 0 0 .45l2.953 2.943a.315.315 0 0 0 .446 0l1.737-1.735c.161-.16.349-.381.349-.609Z"></path>
             </svg>
            </span> Configuración</a></li>
            <?php }?>
          
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../php/logout.php"> <span><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12a.75.75 0 0 1 .75-.75H15V6.375c0-1.5-1.584-2.625-3-2.625H4.875A2.628 2.628 0 0 0 2.25 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h7.5A2.627 2.627 0 0 0 15 17.625V12.75H8.25A.75.75 0 0 1 7.5 12Z"></path>
              <path d="m21.53 11.472-3.75-3.75a.75.75 0 0 0-1.06 1.06l2.47 2.47H15v1.5h4.19l-2.47 2.47a.749.749 0 0 0 .526 1.294.75.75 0 0 0 .534-.234l3.75-3.75a.75.75 0 0 0 0-1.06Z"></path>
           </svg></span> Salir</a></li>
          </ul>
        </div>
       
     
      </div>
    </div>


  <div class="contenedor contenedor-completo">
    <div class="menu text-center">

      <nav>
  
    <ul>
      <img src="../image/logoancec.png" height="100em" alt="" id="img">
      <button class="buton_seccion" > <a href="formulario.php"  id="lista" >
          <div class="parte1_icono" >
            <svg width="28" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.261 4.745a.375.375 0 0 0-.518 0l-8.63 8.244a.374.374 0 0 0-.115.271l-.002 7.737a1.5 1.5 0 0 0 1.5 1.5h4.505a.75.75 0 0 0 .75-.75v-6.375a.375.375 0 0 1 .375-.375h3.75a.375.375 0 0 1 .375.375v6.375a.75.75 0 0 0 .75.75h4.503a1.5 1.5 0 0 0 1.5-1.5V13.26a.374.374 0 0 0-.116-.271L12.26 4.745Z"></path>
              <path d="M23.011 11.444 19.505 8.09V3a.75.75 0 0 0-.75-.75h-2.25a.75.75 0 0 0-.75.75v1.5L13.04 1.904c-.254-.257-.632-.404-1.04-.404-.407 0-.784.147-1.038.405l-9.97 9.539a.765.765 0 0 0-.063 1.048.749.749 0 0 0 1.087.05l9.726-9.294a.375.375 0 0 1 .519 0l9.727 9.294a.75.75 0 0 0 1.059-.02c.288-.299.264-.791-.036-1.078Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Inicio</div></a>
        </button>
        <button class="buton_seccion" >
          <a  href="registro-paciente.php"  id="lista">
          <div class="parte1_icono">
            <svg width="28" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.688 2.25H16.5v-.938a.563.563 0 0 0-.563-.562H8.064a.563.563 0 0 0-.563.563v.937H4.312a.563.563 0 0 0-.562.563v19.875a.562.562 0 0 0 .563.562h15.375a.562.562 0 0 0 .562-.563V2.813a.563.563 0 0 0-.563-.562Zm-3.944 3H8.256v-1.5h7.488v1.5Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Registro Pacientes</div>
      </a>
        </button>

        <button class="buton_seccion" >
          <a  href="registro-medico.php"  id="lista">
          <div class="parte1_icono">
            <svg width="28" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.688 4.5H18V1.875a.375.375 0 0 0-.375-.375H6.375A.375.375 0 0 0 6 1.875V4.5H1.312a.563.563 0 0 0-.562.563v16.875a.562.562 0 0 0 .563.562h21.375a.562.562 0 0 0 .562-.563V5.063a.563.563 0 0 0-.563-.562ZM7.874 3.375h8.25V4.5h-8.25V3.375ZM16.5 14.531h-3.469V18H10.97v-3.469H7.5V12.47h3.469V9h2.062v3.469H16.5v2.062Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Registro Médico</div>
      </a>
        </button>
        <button class="buton_seccion" >
          <a  href="expediente.php"  id="lista">
          <div class="parte1_icono">
            <svg width="28" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.75 16.5H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 16.5H2.25a.75.75 0 0 0-.75.75v3a3.003 3.003 0 0 0 3 3h15a3.004 3.004 0 0 0 3-3v-3a.75.75 0 0 0-.75-.75Z"></path>
              <path d="m22.475 8.807-1.493-5.598C20.685 1.669 19.572.75 18 .75H6c-.787 0-1.453.22-1.973.653-.52.434-.855 1.034-1.008 1.803l-1.494 5.6A.745.745 0 0 0 1.5 9v2.25c0 1.654 1.346 3.75 3 3.75h15c1.654 0 3-2.096 3-3.75V9a.75.75 0 0 0-.025-.193Zm-1.823-.557H15a.746.746 0 0 0-.75.742 2.25 2.25 0 0 1-4.5 0A.746.746 0 0 0 9 8.25H3.348a.094.094 0 0 1-.09-.118l1.228-4.616C4.653 2.653 5.134 2.25 6 2.25h12c.871 0 1.352.4 1.512 1.259l1.23 4.623a.094.094 0 0 1-.09.118Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Expediente</div>
      </a>
        </button>
        <button class="buton_seccion" >
          <a  href="estadistica.php" id="lista">
          <div class="parte1_icono">
            <svg width="28" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 23.25H2.25a1.5 1.5 0 0 1-1.5-1.5V1.5a.75.75 0 0 1 1.5 0v20.25H22.5a.75.75 0 1 1 0 1.5Z"></path>
              <path d="M7.313 20.25H5.438a1.687 1.687 0 0 1-1.688-1.688v-7.125A1.687 1.687 0 0 1 5.438 9.75h1.875A1.687 1.687 0 0 1 9 11.438v7.124a1.687 1.687 0 0 1-1.688 1.688Z"></path>
              <path d="M14.063 20.25h-1.876a1.687 1.687 0 0 1-1.687-1.688V9.188A1.687 1.687 0 0 1 12.188 7.5h1.874a1.687 1.687 0 0 1 1.688 1.688v9.374a1.687 1.687 0 0 1-1.688 1.688Z"></path>
              <path d="M20.795 20.25H18.92a1.687 1.687 0 0 1-1.688-1.688V6.188A1.687 1.687 0 0 1 18.92 4.5h1.875a1.688 1.688 0 0 1 1.687 1.688v12.375a1.687 1.687 0 0 1-1.687 1.687Z"></path>
           </svg>
          </div>
          <div class="parte2_texto" >Estadistica</div>
      </a>
        </button>
    </ul> 
  
  </nav>
 
      </div> 
     

    <div class="container" id="menu-container">

    <!-- ///////////////////////////////////////////////////////// -->
    <!-- MENU RESPONSIVO -->
    <!-- /////////////////////////////////////////////////////////// -->
    <div class="row">
          <div class="col-sm-12">
            <div class="menu-responsive-vertical">
              <div class="menu-vertical">
                <nav  class="navbar bg-success" data-bs-theme="dark">
                  <div class="container-fluid ">
                    <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="boton-configuracion-responsivo">
                      <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z"></path>
                     </svg>
                    </button>
                    <form class="d-flex" role="search">
                    
                      <div class="dropdown dropstart">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="boton-configuracion-responsivo">
                          <svg width="20" height="20" id="configuracion-responsive"  fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                            <path d="m22.05 14.063-.023-.018-1.479-1.16a.756.756 0 0 1-.286-.625v-.542a.75.75 0 0 1 .287-.62l1.479-1.16.022-.018a1.251 1.251 0 0 0 .276-1.597L20.324 4.86a1.259 1.259 0 0 0-1.527-.54l-.017.006-1.739.7a.747.747 0 0 1-.678-.06 8.417 8.417 0 0 0-.469-.275.747.747 0 0 1-.383-.554l-.262-1.856-.006-.034a1.276 1.276 0 0 0-1.239-1.027H9.996a1.262 1.262 0 0 0-1.24 1.05l-.004.026-.262 1.86a.75.75 0 0 1-.38.553 8.21 8.21 0 0 0-.47.273.746.746 0 0 1-.676.06l-1.74-.704-.017-.006a1.26 1.26 0 0 0-1.522.531l-.006.01L1.674 8.34a1.252 1.252 0 0 0 .276 1.598l.023.018 1.479 1.16a.755.755 0 0 1 .286.625v.542a.75.75 0 0 1-.287.62l-1.478 1.16-.023.018a1.25 1.25 0 0 0-.276 1.597l2.002 3.464a1.258 1.258 0 0 0 1.527.54l.017-.006 1.737-.7a.747.747 0 0 1 .678.06c.154.098.31.19.47.275a.747.747 0 0 1 .383.554l.26 1.856.006.034a1.275 1.275 0 0 0 1.242 1.027h4.008a1.262 1.262 0 0 0 1.24-1.05l.005-.026.26-1.86a.75.75 0 0 1 .384-.553 8.32 8.32 0 0 0 .469-.273.747.747 0 0 1 .676-.06l1.74.701.017.007a1.26 1.26 0 0 0 1.529-.542l2.002-3.464a1.251 1.251 0 0 0-.276-1.598Zm-6.304-1.887a3.75 3.75 0 1 1-3.922-3.922 3.76 3.76 0 0 1 3.922 3.922Z"></path>
                         </svg>
                        </button>
                        <ul class="dropdown-menu">
                          <?php if ($_SESSION["rol"] == 1) {?>
                          <li><a class="dropdown-item" href="config/user.php"> <span>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="m23.303 5.22-3.8 3.79-2.278-2.27 3.801-3.788c-2.12-1.03-5.093-1.035-6.853.72-1.655 1.65-1.862 4.247-1.056 6.29l-8.45 8.383a.563.563 0 0 0 0 .797l2.45 2.442a.563.563 0 0 0 .797 0l8.438-8.46c2.023.76 4.594.545 6.222-1.079 1.758-1.755 1.754-4.703.73-6.825Z"></path>
                              <path d="m17.13 14.469-3.366 3.375 3.54 3.746a.51.51 0 0 0 .734.01l2.812-2.834a.518.518 0 0 0-.011-.736l-3.708-3.561Z"></path>
                              <path d="M5.578 9.937c0-.228-.188-.437-.35-.599l-.011-.011-.073-.07a.05.05 0 0 1-.012-.037.758.758 0 0 1 .446-.093c.06.006.278.042.582.23.158.098 1.53 1.417 2.059 1.908a.516.516 0 0 0 .007.72l.348.367 3.078-3.054-.387-.368a.51.51 0 0 0-.718-.003C9.47 7.77 9.187 7.266 9.094 6.937c-.207-.725.194-1.312.656-1.687.274-.217.838-.379 1.36-.422a2.47 2.47 0 0 1 .544.028c.163.024.295.054.346.066.177.048.35.11.516.187l.563-.89a4.142 4.142 0 0 0-.629-.83 5.391 5.391 0 0 0-.243-.239c-.365-.335-1.312-.9-2.559-.9-.72 0-1.433.14-2.098.413-1.755.72-2.901 1.7-3.427 2.22l-.004.003a10.29 10.29 0 0 0-.979 1.14c-.25.353-.224.742-.205 1 0 .015 0 .032.003.047a.863.863 0 0 0-1.11.086L.093 8.888a.318.318 0 0 0 0 .45l2.953 2.943a.315.315 0 0 0 .446 0l1.737-1.735c.161-.16.349-.381.349-.609Z"></path>
                           </svg>
                          </span>Configuración</a></li>
                           <?php } ?>
                        
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="../php/logout.php"> <span><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 12a.75.75 0 0 1 .75-.75H15V6.375c0-1.5-1.584-2.625-3-2.625H4.875A2.628 2.628 0 0 0 2.25 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h7.5A2.627 2.627 0 0 0 15 17.625V12.75H8.25A.75.75 0 0 1 7.5 12Z"></path>
                            <path d="m21.53 11.472-3.75-3.75a.75.75 0 0 0-1.06 1.06l2.47 2.47H15v1.5h4.19l-2.47 2.47a.749.749 0 0 0 .526 1.294.75.75 0 0 0 .534-.234l3.75-3.75a.75.75 0 0 0 0-1.06Z"></path>
                         </svg></span>Salir </a></li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </nav>
            </div>
          </div>
        </div>
      </div>
  



        <div class="row d-flex justify-content-center" id="titulo">
          <div class="col-sm-12 col-md-12 text-center">
            <h1>REGISTRO MÉDICO</h1>
            <hr />
          </div>
          <div class="col-sm-3 offset-sm-2 col-md-3 offset-md-0">
            <h5>Ingresar cédula</h5>
          </div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Ingrese cédula"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                id="bsc_cedula_medico"
              />
              <button
                class="btn btn btn-success"
                type="button"
                id="buscar_pac_medico"
              >
                <svg
                  width="25"
                  height="25"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"
                  ></path>
                  <path d="M15.857 15.86 21 21.001"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="row" id="cuerpo">
          <form class="row g-3 needs-validation" novalidate>
          <div class="table-responsive">
              <table class="class= table table-borderless" id="tabla-datos">
                <thead>
                  <tr style="background-color: #E5E7E9; font-size:12px;">
                 
                    <th>Nombre Completo</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Provincia</th>
                    <th>Distrito</th>
                    <th>Area de referencia</th>
                    <th>Padese alergias</th>
                    <th>AHF</th>
                    <th>APP</th>
                    <th>AQT</th>
                    <th>Medicamentos</th>
                  </tr>
                </thead>
                <tbody id="tbody">
                  <!-- Los datos se mostrarán aquí -->
                </tbody>
              </table>
            </div>
                          
              <div class="col-5">
                <button type="button" class="btn btn-info my-3"   data-bs-toggle="modal" data-bs-target="#exampleModal" id="historial">
                  Historial Clínico
                </button>
              </div>



          </form>
        </div>
        <!-- cuerpo 2 -->
        <div class="row my-3" id="cuerpo_2">
            <div class="col-md-12 my-3">
                <label for="validationCustomUsername" class="form-label"
                  ><strong>¿Motivo de su visita?</strong></label
                >
                <textarea class="form-control" aria-label="With textarea" id="motivo"></textarea>
              </div>

              <!-- ------- -->
              <div class="col-md-12 my-3">
                <label for="validationCustomUsername" class="form-label"
                  ><strong>¿Tipo de examen que se realizara?</strong></label
                >

              </div>
              <div class="col-md-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="comple" value="completo" name="completo">
                    <label class="form-check-label" for="inlineCheckbox1">Completo</label>
                  </div>
              </div>
              <div class="col-md-2">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="sobre_cin" value="option2" name="sobre_cintura">
                    <label class="form-check-label" for="inlineCheckbox2">Sobre cintura</label>
                  </div>
              </div>
              <div class="col-6 ">
                <div class="form-check form-check-inline">
                    <input class="form-check-input mb-3" type="checkbox" id="lesion_especifica" value="option3" name="lesion_especifica" >
                    <label class="form-check-label" for="inlineCheckbox3">Lesión especifica</label>
             
                  </div>
                  <button type="button" class="btn btn-primary btn-sm " id="btn-abrir" data-bs-toggle="modal" data-bs-target="#modal-lesion">
                    escoger  Ubicación de lesión
                  </button>
              </div>
              <div class="col-md-12 my-3">
                <label for="validationCustomUsername" class="form-label"
                  ><strong>Impresión diagnostica</strong></label
                >

              </div>
              <div class="col-md-4 ">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="quera_seba" name="quera_seba">
                    <label class="form-check-label" for="flexCheckDefault">
                        Queratosis Sebarréica
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="quera_act" name="quera_act" >
                    <label class="form-check-label" for="flexCheckChecked">
                        Queratosis Actínica
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="carci_baso">
                    <label class="form-check-label" for="flexCheckDefault">
                        Carcinoma Basocelular
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="carci_esca" name="carci_esca" >
                    <label class="form-check-label" for="flexCheckChecked">
                        Carcinoma de células escamosas
                    </label>
                  </div>

              </div>
              <div class="col-md-3 ">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="lunar_disp" name="lunar_disp"> 
                    <label class="form-check-label" for="flexCheckDefault">
                        Lunar Displástico
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="lunar_conge" name="lunar_conge" >
                    <label class="form-check-label" for="flexCheckChecked">
                        Lunar Congénito
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Pterigion" name="pteri">
                    <label class="form-check-label" for="flexCheckDefault">
                        Pterigion
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="melanoma" name="melanoma" >
                    <label class="form-check-label" for="flexCheckChecked">
                        Melanoma
                    </label>
                  </div>

              </div>
              <div class="col-md-2 ">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="otro" name="otro">
                    <label class="form-check-label" for="flexCheckDefault">
                        Otros
                    </label>
                    <input
                    type="text"
                    class="form-control form-control-sm"
                    id="otra_impre"
                    required
                  />
             
                </div>
              </div>
              <div class="col-md-3 ">
                <div class="form-check">
                    <label for="validationCustomUsername" class="form-label"
                    ><strong>Comentarios</strong></label
                  >
                  <textarea class="form-control" aria-label="With textarea" id="comentario_impresion"></textarea>
             

              </div>
            </div>
              <!-- --------- -->
              <div class="col-md-12 my-3 mb-0">
                <label for="validationCustomUsername" class="form-label"
                  ><strong>Recomendación</strong></label>

              </div>
              <div class="col-md-4 ">
                <div class="form-check">
                
                    <label class="form-check-label" for="flexCheckDefault">
                       Biopsia
                    </label>
                  </div>
                  <div class="form-check">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="biopsia" id="biopsia_no" value="si">
                        <label class="form-check-label" for="inlineRadio1">Si </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="biopsia" id="biopsia_no" value="no">
                        <label class="form-check-label" for="inlineRadio2">no</label>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 ">
                <div class="form-check">
                
                    <label class="form-check-label" for="flexCheckDefault">
                       ¿Algún comentario?
                    </label>
                  </div>
                  <div class="form-check">
                    <textarea class="form-control" aria-label="With textarea" id="comen_biopsia"></textarea>
                  </div>
              </div>
              <div class="col-md-12 my-3 mb-0">
                <label for="validationCustomUsername" class="form-label"
                  ><strong>Tratamiento</strong></label>

              </div>
              <div class="col-md-6 my-3">
                <label for="validationCustomUsername" class="form-label"
                  >Comentario</label>
                    <textarea class="form-control" aria-label="With textarea" id="recomendacion_tratam"></textarea>
              </div>
              <div class="col-md-6 my-3">
                <label for="validationCustomUsername" class="form-label"
                  >Referir a:</label>
                  <select class="form-select" aria-label="Default select example" id="referir">
                    <option selected></option>
                    <option value="1">CSS</option>
                    <option value="2">Ateneo Dermatologia</option>
                    <option value="3">Minsa</option>
                    <option value="4">Clinica #Yolucho</option>
                    <option value="5">C.R. Oncologico</option>
                    <option value="6">ION</option>
                  </select>
          </div>
     
  
        <!-- boton final -->
        <div class=" row justify-content-right mb-2">
        <div class="col-3">
          
              <button class="btn btn-primary" id="agregar_registros_medicos" 
              type="submit" >Agregar Información</button>
   
        </div>
        
        </div>
      </div>
    </div>
  <!-- MODAL HISTORIA CLINICO -->
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
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          
            </div>
          </div>
        </div>
      </div>
  <!-- MODAL LESION  -->
  <div class="modal fade" id="modal-lesion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ubicar Lesion</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center" id="preb" >
        <span > <i>Seleccione la Ubicación dando clic sobre la imagen</i> </span>
        <div id="contenedor_img_marcador" >
      <img id="cuerpo_" class="img-fluid" src="../image/cuerpo_completo.png"  onclick="marcar(event)">
  <!-- Contenedor para los marcadores -->
  <div id="marcadores"></div>
 
  </div>
      </div>
      <div class="modal-footer">
     
        <button type="button" class="btn btn-primary" id="clean">Limpiar Marcadores</button>
        <!-- <button type="button" class="btn btn-secondary" id="save" data-bs-dismiss="modal">Guardar Cambios</button> -->
        <button  type="button" class="btn btn-primary" id="save">Guardad</button>
      </div>
    </div>
  </div>
</div>

  <!-- ////////////////////////////////////////////////////////// -->
  <!-- //MENU RESPONSIVO -->
  <!-- ////////////////////////////////////////////// -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
       <a href="formulario.php" id="menu-extra">Inicio</a>
       <hr id="linea">
       <a href="registro-paciente.php" id="menu-extra">Registro Paciente</a>
       <hr id="linea">
       <a href="registro-medico.php" id="menu-extra">Registro Médico</a>
       <hr id="linea">
       <a href="estadistica.php" id="menu-extra">Estadistica</a>
       <hr id="linea">
      </div>
     
    </div>
  </div>





</body>
<script src="../jquery/jquery-3.5.1.min.js"></script>
<script src="../javascript/envio_datos/datos_medico.js"></script>
<!-- <script src="html2canvas.min.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.3.2/dist/html2canvas.min.js"></script>
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
crossorigin="anonymous"
></script>
<script src="
https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.all.min.js
"></script>

<!-- <script src="../javascript/envio_datos/datos_registros.js"></script> -->
<script src="../javascript/mos_ocul_btn.js"></script>
</html>