

$(document).ready(function () {
  $("#datos_pacientes").click(function () {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();

    const fecha_ingreso = `${anio}/${mes}/${dia}`;
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("ape").value;
    const seguro = $("#seguro option:selected").text();
    const sexo = $("#sexo option:selected").text();
    const estado_civil = $("#estado_civil option:selected").text();
    var telefono = document.getElementById("telefono").value;
    var edad = document.getElementById("ed").value;
    var fecha_nac = document.getElementById("fecha_nac").value;
    const provincia = $("#provincias option:selected").text();
    const distrito = $("#distritos option:selected").text();
    var ocupacion = document.getElementById("ocupacion").value;
    var lugar_trabajo = document.getElementById("lugar_trabajo").value;
    const area_referencia = $("#area_referencia option:selected").text();
    const alergia = $("#alergia option:selected").text();
    var ahf = document.getElementById("ahf").value;
    var app = document.getElementById("app").value;
    var aqt = document.getElementById("aqt").value;
    var medicamentos_alergicos =
    document.getElementById("medicamentos_aler").value;
    if(cedula.length == ""  ){
      Swal.fire({
        icon: 'error',
        title: 'Acción inapropiada',
        text: 'El campo cédula se encuentra vacío',
        
      })
    }else{
    var datos = {
      cedula: cedula,
      nombre:nombre,
  apellido:apellido,
  seguro:seguro,
  sexo:sexo,
  estado_civil:estado_civil,
  telefono:telefono,
  edad:edad,
  fecha_nac:fecha_nac,
  provincia:provincia,
  distrito:distrito,
  ocupacion:ocupacion,
  lugar_trabajo:lugar_trabajo,
  area_referencia:area_referencia,
  alergia:alergia,
  ahf:ahf,
  app:app,
  aqt:aqt,
  medicamentos_alergicos:medicamentos_alergicos,
  fecha_ingreso:fecha_ingreso

// revisar uno por uno

    };
    $.ajax({
      type: "POST",
      url: "../php/pacientes.php",
      data: JSON.stringify(datos),
      success: function(respuesta){
    
      console.log(respuesta);
    if (respuesta == 0) {
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
        title: 'Datos Guardados Correctamente'
      })

     
      document.getElementById("cedula").value = " ";
      document.getElementById("nombre").value = "";
      document.getElementById("ape").value = "";
      $("#seguro").prop("selectedIndex", 0);
      $("#sexo").prop("selectedIndex", 0);
      $("#estado_civil").prop("selectedIndex", 0);
      document.getElementById("telefono").value = "";
      document.getElementById("ed").value = "";
      document.getElementById("fecha_nac").value = "";
      $("#provincias").prop("selectedIndex", 0);
      $("#distritos").prop("selectedIndex", 0);
      document.getElementById("ocupacion").value = "";
      document.getElementById("lugar_trabajo").value = "";
      $("#area_referencia").prop("selectedIndex", 0);
      $("#alergia").prop("selectedIndex", 0);
      document.getElementById("ahf").value = "";
      document.getElementById("app").value = "";
      document.getElementById("aqt").value = "";
      document.getElementById("medicamentos_aler").value = "";
      




    } 

    
    else {
    Swal.fire({
          icon: "error",
             title: "Error",
       text: "Posiblemente el paciente ya se encuentra registrado en la Base de Datos",
           showConfirmButton: false,
          timer: 2000,
         });
      
        }
      }
    
    });
    }
  });

// CODIGO MEDICO
// Funcion para buscar datos pacientes medicos


$("#buscar_pac_medico").click(function () {
  var cedula = document.getElementById("bsc_cedula_medico").value;

$.ajax({
  type: 'POST',
  url: 'buscar.php',
  data: {
    accion:'funcion-buscar-cedula',
    cedula: cedula},
  success: function(data) {
    var resultado = JSON.parse(data);
    $('#nombre').val(resultado.nombre);
    $('#apellido').val(resultado.apellido);
  }
});
})



$("#examenfisico").click(function () {
  var cedula = document.getElementById("cedula").value;
  document.getElementById("cedula_examenes").value = cedula;

})
$("#guardar_examenes").click(function () {
  var cedula = document.getElementById("cedula_examenes").value;
    var peso = document.getElementById("peso_examenes").value;
    var talla= document.getElementById("talla_examenes").value;
    var pulso= document.getElementById("pulso_examenes").value;
    var presion= document.getElementById("presion_examenes").value;
    var fecha = document.getElementById("fecha_examenes").value;

    $.ajax({
      type: 'POST',
      url: '../php/examenes.php',
      datatype:"json",
      data: {cedula:cedula,peso:peso,talla:talla,pulso:pulso,presion:presion,fecha:fecha},
      success: function(datos) {
console.log(datos)
if(datos==0){
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
    title: 'Datos Guardados con exito'
  })



  document.getElementById("peso_examenes").value =" ";
   document.getElementById("talla_examenes").value=" ";
  document.getElementById("pulso_examenes").value=" ";
 document.getElementById("presion_examenes").value=" ";
  document.getElementById("fecha_examenes").value=" ";
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Los datos no fueron guardados',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
      }
  })

  

})



});
