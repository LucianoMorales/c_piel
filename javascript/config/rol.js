$(document).ready(function() {
    /////////////////////////////////////////////////////
    // CREACION DEL BOTON DE EDITAR
    /////////////////////////////////////////////////////
    var idUsuario="";
    var editar = document.createElement('button');

editar.className = 'btn btn-outline-primary';
editar.setAttribute('type', 'button');
editar.setAttribute('style', '--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;');
editar.setAttribute('data-bs-target', '#editar');
editar.setAttribute('data-bs-toggle','modal')
editar.setAttribute('id', 'btn-editar');
// Crear un elemento span y asignar la clase 'bi bi-pencil' y el SVG
var span = document.createElement('span');
span.className = 'bi bi-pencil';
span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>';

// Agregar el elemento span al botón editar
editar.appendChild(span);
 /////////////////////////////////////////////////////
    // CREACION DEL BOTON DE ELIMINAR
    /////////////////////////////////////////////////////
    var eliminar = document.createElement('button');

eliminar.className = 'btn btn-outline-danger';
eliminar.setAttribute('type', 'button');
eliminar.setAttribute('style', '--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;');
eliminar.setAttribute('data-bs-target', '#eliminar');
eliminar.setAttribute('data-bs-toggle','modal')
eliminar.setAttribute('id', 'btn-eliminar');

var span = document.createElement('span');
span.className = 'bi bi-trash';
span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>';

// Agregar el elemento span al botón editar
eliminar.appendChild(span);

    //////////////////////////////////////////////////////
    //DATOS DE LOS ROLES
    /////////////////////////////////////////////////////
    $.ajax({
        type:"GET",
        url: '../../php/config/roles/mostrar_rol.php',
        dataType: 'json',
     
        success: function(datos) {
            var tabla = '';
            $.each(datos, function(i, item) {

              tabla += '<tr data-id-usuario="' + item.id_rol + '">';
              tabla += '<td>' + item.tipo + '</td>';
           
              tabla += '<td>'+editar.outerHTML+eliminar.outerHTML+'</td>';
              tabla += '<td></td>';
              tabla += '</tr>';
            });
            
            // Agrega la tabla al cuerpo de la tabla en el HTML
            $('#tabla-datos tbody').html(tabla);
        }
      });


///////////////////////////////////////////////////////
//TOMA EL ID DEL CUADRO USUARIO PARA SU POSTERIOS EDICIONES
//Y ASI TRAERA LOS DATOS DEL USUARIO
///////////////////////////////////////////////////////////

$('#tabla-datos tbody').on('click', '#btn-editar', function() {
    var usuario = document.getElementById("usuario_edit")
    // Obtén el id del usuario de la fila de la tabla
    idUsuario = $(this).closest('tr').data('id-usuario');
console.log(idUsuario);
    $.ajax({
        type: 'POST',
        url: '../../php/config/roles/traer_datos.php',
        datatype:"json",
        data: {idUsuario:idUsuario},
        success: function(datos) {
            var datosJSON = JSON.parse(datos);
            $("#rol_edit").val(datosJSON.tipo);

        }
    })
});


///////////////////////////////////////////////////////////
//BOTON PARA ACTUALIZAR LOS DATOS DE lOS ROLES
//
//
//////////////////////////////////////////////////////


$("#btn_actualizar_edit").click(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Actualización',
        text: "¿Seguro quieres actualizar los datos?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Actualizar'
      }).then((result) => {
        if (result.isConfirmed) {
          
      

            var rol = document.getElementById("rol_edit").value;

            $.ajax({
                type: 'POST',
                url: '../../php/config/roles/update_rol.php',
                data: {idUsuario: idUsuario, rol: rol},
                
                success: function(response) {
        if(response==0){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Datos Actualizados'
              })
        
        
        //////////////////////////////////////////////////////
    //DATOS DE LOS ROLES
    /////////////////////////////////////////////////////
    $.ajax({
        type:"GET",
        url: '../../php/config/roles/mostrar_rol.php',
        dataType: 'json',
     
        success: function(datos) {
            var tabla = '';
            $.each(datos, function(i, item) {

              tabla += '<tr data-id-usuario="' + item.id_rol + '">';
              tabla += '<td>' + item.tipo + '</td>';
           
              tabla += '<td>'+editar.outerHTML+eliminar.outerHTML+'</td>';
              tabla += '<td></td>';
              tabla += '</tr>';
            });
            
            // Agrega la tabla al cuerpo de la tabla en el HTML
            $('#tabla-datos tbody').html(tabla);
        }
      });
        
        }
        else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'warning',
                title: 'Los datos no se pudieron guardar'
              })
        }
                }
            })
       
        
   
   }
      })
})

/////////////////////////////////////////////////////
//BOTON PARA NUEVO ROLES
////////////////////////////////////////////////////
$("#btn_nuevo_rol").click(function(e) {
    var rol= document.getElementById("rol_add").value;
  
    $.ajax({
        type: 'POST',
        url: '../../php/config/roles/add_rol.php',
        data: {idUsuario: idUsuario, rol: rol},
        success: function(response) {

            if (response == 0){
 //////////////////////////////////////////////////////
    //DATOS DE LOS ROLES
    /////////////////////////////////////////////////////
    $.ajax({
        type:"GET",
        url: '../../php/config/roles/mostrar_rol.php',
        dataType: 'json',
     
        success: function(datos) {
            var tabla = '';
            $.each(datos, function(i, item) {

              tabla += '<tr data-id-usuario="' + item.id_rol + '">';
              tabla += '<td>' + item.tipo + '</td>';
           
              tabla += '<td>'+editar.outerHTML+eliminar.outerHTML+'</td>';
              tabla += '<td></td>';
              tabla += '</tr>';
            });
            
            // Agrega la tabla al cuerpo de la tabla en el HTML
            $('#tabla-datos tbody').html(tabla);
        }
      });

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Datos Guardados'
      })



            }
            else{
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'warning',
                    title: 'Datos No Guardados, Intentelo de nuevo'
                  })
            }
        }
    })
})


///////////////////////////////////////////////////////
//BOTON PARA ELIMINAR EL USUARIO
///////////////////////////////////////////////////////////

$('#tabla-datos tbody').on('click', '#btn-eliminar', function() {
    Swal.fire({
      title: '¿Eliminar?',
      text: "Segura desea eliminar el usuario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar.',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        idUsuario = $(this).closest('tr').data('id-usuario');
  
    $.ajax({
        type: 'POST',
        url: '../../php/config/roles/delete_rol.php',
        datatype:"json",
        data: {idUsuario:idUsuario},
        success: function(datos) {
           if (datos==0){
            Swal.fire(
              'Eliminado!',
              'El usuario fue eliminado',
              'success'
            )
  
              //////////////////////////////////////////////////////
      //DATOS DE LOS ROLES
      /////////////////////////////////////////////////////
      $.ajax({
        type:"GET",
        url: '../../php/config/roles/mostrar_rol.php',
        dataType: 'json',
     
        success: function(datos) {
            var tabla = '';
            $.each(datos, function(i, item) {

              tabla += '<tr data-id-usuario="' + item.id_rol + '">';
              tabla += '<td>' + item.tipo + '</td>';
           
              tabla += '<td>'+editar.outerHTML+eliminar.outerHTML+'</td>';
              tabla += '<td></td>';
              tabla += '</tr>';
            });
            
            // Agrega la tabla al cuerpo de la tabla en el HTML
            $('#tabla-datos tbody').html(tabla);
        }
      });
           }
           else{
            Swal.fire(
              'Error',
              'Intentelo de nuevo',
              'warning'
            )
           }
        }
    })
      }
    })
  
  
  
   
  });


    })