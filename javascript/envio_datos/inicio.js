// **********************************************************
// ****** TABLA PRINCIPAL DE LOS PACIENTES ******************
// ***********************************************************

$(document).ready(function() {
  $.ajax({
    type:"GET",
    url: '../php/tablas_inicio/informes_diarios.php',
    dataType: 'json',
 
    success: function(datos) {
  
      $('#cant_infor_diarios').html(datos.informe);
      $('#cant_pacie_diarios').html(datos.paciente);
    
    }
  });

    $.ajax({
        url: '../php/tablas_inicio/inicio.php',
        // dataType: 'json',
        success: function(datos) {
          // Agrega la tabla al cuerpo de la tabla en el HTML
          $('#tabla-datos tbody').html(datos);
        }
      });

      
      
    var miInput = document.getElementById("bsc_paciente");
    miInput.addEventListener("input", function() {
        if (miInput.value.length > 0) {
            $.ajax({
                url: "../php/tablas_inicio/tabla_dinamica.php",
                type: "POST",
                data: { miInput:miInput.value },
                success: function(datos) {
               
                    
                    // Agrega la tabla al cuerpo de la tabla en el HTML
                    $('#tabla-datos tbody').html(datos);
               
                }
              });
        } else {
            $.ajax({
                url: '../php/tablas_inicio/inicio.php',
                // dataType: 'json',
             
                success: function(datos) {
          
                  
                  // Agrega la tabla al cuerpo de la tabla en el HTML
                  $('#tabla-datos tbody').html(datos);
                }
              });
        }
      });


   
  });



  $(document).ready(function() {

    var fecha = new Date().toLocaleDateString('en-CA');

    $.ajax({
        url: '../php/tablas_inicio/pacientes_dia.php',
        // dataType: 'json',
        type: 'POST',
        data: { fecha: fecha },
        success: function(datoss) {
          // Construye la tabla con los datos recibidos
        //   var tabla1 = '';
        //   $.each(datoss, function(i, item) {
        //     tabla1 += '<tr>';
        //     tabla1 += '<td>' + item.cedula + '</td>';
        //     tabla1 += '<td>' + item.nombre + item.apellido + '</td>';
   
        //     tabla1 += '<td>' + item.telefono + '</td>';
        
        //     tabla1 += '</tr>';
        //   });
          
          // Agrega la tabla al cuerpo de la tabla en el HTML
          $('#info').html(datoss);
        }
      });
  });




  $(document).ready(function() {

    var fecha = new Date().toLocaleDateString('en-CA');

    $.ajax({
        url: '../php/tablas_inicio/pacientes_dia.php',
        // dataType: 'json',
        type: 'POST',
        data: { fecha: fecha },
        success: function(datoss) {
  
          
          // Agrega la tabla al cuerpo de la tabla en el HTML
          $('#info').html(datoss);
        }
      });
  });


  
  $(document).ready(function() {
    $("#btn-add-new").click(function(e) {
      e.preventDefault();
      var cedula= document.getElementById("bsc_paciente").value;

      $.ajax({
        url: '../php/tablas_inicio/add-nuevo.php',
        // dataType: 'json',
        type: 'POST',
        data: { cedula:cedula },
        success: function(respuesta) {
  console.log(respuesta);
          if (respuesta==0){
            window.location.href="registro-paciente.php";
          }
          else{
                 Swal.fire({
              title: '<strong>Paciente Encontrado</strong>',
              icon: 'info',
              html:
               respuesta +
               '<p>se encuentra registrado en la base de datos de cáncer de mama </p>'
              +
                '<p style="font-size:14px"><strong>¿Desea registrarlo en el nuestra Base de datos?</strong></p>',
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              confirmButtonText:
                'Aceptar',
            
              cancelButtonText:
                'Regresar',
          
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                        $.ajax({
        url: '../php/tablas_inicio/update_paciente.php',
        // dataType: 'json',
        type: 'POST',
        data: { cedula:cedula },
        success: function(resp) {
if(resp == 1){
 Swal.fire('Paciente guardado', '', 'success');
 // **********************************************************
// ****** TABLA PRINCIPAL DE LOS PACIENTES ******************
// ***********************************************************

$(document).ready(function() {
  $.ajax({
    type:"GET",
    url: '../php/tablas_inicio/informes_diarios.php',
    dataType: 'json',
 
    success: function(datos) {
      $('#cant_infor_diarios').html(datos.informe);
      $('#cant_pacie_diarios').html(datos.paciente);
    
    }
  });

    $.ajax({
        url: '../php/tablas_inicio/inicio.php',
        // dataType: 'json',
        success: function(datos) {
          // Agrega la tabla al cuerpo de la tabla en el HTML
          $('#tabla-datos tbody').html(datos);
        }
      });

      
      
    var miInput = document.getElementById("bsc_paciente");
    miInput.addEventListener("input", function() {
        if (miInput.value.length > 0) {
            $.ajax({
                url: "../php/tablas_inicio/tabla_dinamica.php",
                type: "POST",
                data: { miInput:miInput.value },
                success: function(datos) {
               
                    
                    // Agrega la tabla al cuerpo de la tabla en el HTML
                    $('#tabla-datos tbody').html(datos);
               
                }
              });
        } else {
            $.ajax({
                url: '../php/tablas_inicio/inicio.php',
                // dataType: 'json',
             
                success: function(datos) {
          
                  
                  // Agrega la tabla al cuerpo de la tabla en el HTML
                  $('#tabla-datos tbody').html(datos);
                }
              });
        }
      });


   
  });
}
else{
  console.log(resp);
}
        }
      })


               
              } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
              }
            })
          }
          // Agrega la tabla al cuerpo de la tabla en el HTML
        
        }
      });

    }
  )

})