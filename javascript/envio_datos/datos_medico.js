
function marcar(event) {
  // Crear un nuevo marcador
  var marcador = document.createElement("div");
  marcador.className = "marcador";
  // Obtener las coordenadas del clic dentro del contenedor
  var containerRect = document.querySelector('#preb').getBoundingClientRect();
  var x = event.clientX - containerRect.left;
  var y = event.clientY - containerRect.top;
  // Colocar el marcador en el lugar correspondiente
  marcador.style.left = x + "px";
  marcador.style.top = y + "px";
  // Agregar el marcador al contenedor
  document.getElementById("marcadores").appendChild(marcador);
}


var dataURL=" ";
$(document).ready(function () {

  $("#clean").click(function () {
    dataURL=undefined;
    var marcadoresContainer = document.getElementById("marcadores");

    // Borrar todos los marcadores
    while (marcadoresContainer.firstChild) {
      marcadoresContainer.removeChild(marcadoresContainer.firstChild);
    }
  })

  $("#save").click(function () {
    dataURL=null;
    const cuerpo = document.getElementById("contenedor_img_marcador");
    var img = document.createElement("img");
    
    img
    // Crear una nueva imagen que combine la imagen original con los marcadores
    html2canvas(cuerpo).then(function(canvas) {
      // Convertir la imagen a un archivo PNG
      dataURL = canvas.toDataURL("image/png");
      // Enviar la imagen al servidor para guardarla en la base de datos
      // Aquí se puede utilizar AJAX para enviar la imagen al servidor

    });
  })
  // CODIGO MEDICO
  // Funcion para buscar datos pacientes medicos

  $("#buscar_pac_medico").click(function () {
    var cedula = document.getElementById("bsc_cedula_medico").value;
    const dato= {cedula:cedula};
    $.ajax({
      type: "POST",
      url: "../php/bsc_paciente.php",
        data:JSON.stringify(dato),
      
      success: function (data) {
        $('#tabla-datos tbody').html(data);
      
      },
    })
  })

  // ---------------------------------------
  //   Funcion registrar datos del medico
  // -------------------------------------------------

  $("#agregar_registros_medicos").click(function () {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();

    const fecha_ingreso = `${anio}/${mes}/${dia}`;
    var cedula = document.getElementById("bsc_cedula_medico").value;

    if (cedula.length == "") {
      Swal.fire({
        icon: "error",
        title: "Acción indevida",
        text: "El campo cédula se encuentra vacío",
      });
    } else {
      var motivo = document.getElementById("motivo").value;
      var ex_completo = document.getElementsByName("completo")[0].checked
        ? 1
        : 0;
      var sobre_cintura = document.getElementsByName("sobre_cintura")[0].checked
        ? 1
        : 0;
      var lesion_especifica = document.getElementsByName("lesion_especifica")[0]
        .checked
        ? 1
        : 0;
      var quera_seba = document.getElementsByName("quera_seba")[0].checked
        ? 1
        : 0;
      var quera_act = document.getElementsByName("quera_act")[0].checked
        ? 1
        : 0;
      var carci_baso = document.getElementsByName("carci_baso")[0].checked
        ? 1
        : 0;
      var carci_esca = document.getElementsByName("carci_esca")[0].checked
        ? 1
        : 0;
      var lunar_disp = document.getElementsByName("lunar_disp")[0].checked
        ? 1
        : 0;
      var lunar_conge = document.getElementsByName("lunar_conge")[0].checked
        ? 1
        : 0;
      var pteri = document.getElementsByName("pteri")[0].checked ? 1 : 0;
      var melanoma = document.getElementsByName("melanoma")[0].checked ? 1 : 0;
      var otro = document.getElementsByName("otro")[0].checked ? 1 : 0;
      var otro_impresion = document.getElementById("otra_impre").value;
      var comentario_impre = document.getElementById(
        "comentario_impresion"
      ).value;
      var biopsia = document.querySelector(
        'input[name="biopsia"]:checked'
      ).value;
      var comen_biopsia = document.getElementById("comen_biopsia").value;
      var comentario_tratam = document.getElementById(
        "recomendacion_tratam"
      ).value;
      const referencia = $("#referir option:selected").text();
      var datos = {
        cedula: cedula,
        fecha_ingreso: fecha_ingreso,
        motivo: motivo,
        ex_completo: ex_completo,
        sobre_cintura: sobre_cintura,
        lesion_especifica: lesion_especifica,
        quera_seba: quera_seba,
        quera_act: quera_act,
        carci_baso: carci_baso,
        carci_esca: carci_esca,
        lunar_disp: lunar_disp,
        lunar_conge: lunar_conge,
        pteri: pteri,
        melanoma: melanoma,
        otro: otro,
        otro_impresion: otro_impresion,
        comentario_impre: comentario_impre,
        biopsia: biopsia,
        comen_biopsia: comen_biopsia,
        comentario_tratam: comentario_tratam,
        referencia: referencia,
        dataURL: dataURL
      };

      $.ajax({
        type: "POST",
        url: "../php/ingresar_datos_m.php",
        data: JSON.stringify(datos),
        success: function (respuesta) {
          console.log(respuesta);
          if (respuesta == 0) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Datos Guardados Correctamente",
            });


            document.getElementById("motivo").value = '';
            document.getElementsByName("completo")[0].checked = false;
            document.getElementsByName("sobre_cintura")[0].checked = false;
            document.getElementsByName("lesion_especifica")[0].checked = false;
            document.getElementsByName("quera_seba")[0].checked = false;
            document.getElementsByName("quera_act")[0].checked = false;
            document.getElementsByName("carci_baso")[0].checked = false;
            document.getElementsByName("carci_esca")[0].checked = false;
            document.getElementsByName("lunar_disp")[0].checked = false;
            document.getElementsByName("lunar_conge")[0].checked = false;
            document.getElementsByName("pteri")[0].checked = false;
            document.getElementsByName("melanoma")[0].checked = false;
            document.getElementsByName("otro")[0].checked = false;
            document.getElementById("otra_impre").value = '';
            document.getElementById("comentario_impresion").value = '';
            document.querySelector('input[name="biopsia"]:checked').checked = false;
            document.getElementById("comen_biopsia").value = '';
            document.getElementById("recomendacion_tratam").value = '';
            $("#referir").prop("selectedIndex", 0);
          } else {
            Swal.fire({
              icon: "error",
              title: "Datos no guardados",
              text: "Intentelo de neuvo",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        },
      });
    }
  });

  // ---------------------------------------------
  // FUNCION TRAER HISTORIAL PACIENTE
  // ------------------------------------------------

  $("#historial").click(function () {
    var cedula = document.getElementById("bsc_cedula_medico").value;

    $.ajax({
      type: "POST",
      url: "../php/medico.php",
      data: {
        accion: "historial-clinico",
        cedula: cedula,
      },
      success: function (datos) {

    
        if (datos == 1) {
          Swal.fire({
            icon: "error",
            title: "Datos no encontrados",
            text: "Asegúrese de que el paciente se encuentre registrado o su cédula esté correcta",
          });
        } else {
          var datos = JSON.parse(datos);
          console.log(datos);
          var div = document.getElementById("targeta");
          var html = "";
          for (var i = 0; i < datos.length; i++) {
            var registro = datos[i];
            var fecha_informe = registro.fecha_informe;
            var nombre_medico = registro.nombre_medico;
            var motivo = registro.motivo;
            var tratamiento = registro.tratamiento;
            var biopsia = registro.biopsia;
            var biopsia_comentario = registro.biopsia_comentario;
            var referir = registro.referir;
            var completo = registro.completo;
            var sobre_cintura = registro.sobre_cintura;
            var lesion_especifica = registro.lesion_especifica;
            var queretosis_seborreica = registro.queretosis_seborreica;
            var queretosis_actinica = registro.queratosis_actinica;
            var carcinoma_basocelular = registro.carcinoma_basocelular;
            var celulas_escamosas = registro.celulas_escamosas;
            var lunar_diplastico = registro.lunar_diplastico;
            var lunar_congenito = registro.lunar_congenito;
            var pterigion = registro.pterigion;
            var melanoma = registro.melanoma;
            var otro = registro.otro;
            var comentario = registro.comentario;

            console.log(queretosis_actinica);
            const img = new Image();
            img.style.width="440px";
            img.classList.add("img-fluid");
            img.src = registro.img_dataurl; //imagen base64
         var img_img = registro.img_dataurl;
            if (img_img === null) {
              var html =
              html +
              `<br> 
              <div class="card" id="card-title">
              <h5 class="card-header">Fecha de atención: ${fecha_informe}</h5>
          <div class="card-body">
                <h5 class="card-title"><strong>Doctor:</strong> ${nombre_medico}</h5>
                <div class="container text-center">
          
          <div class="row">
           <div class="col-sm">
              <p class="card-text"><strong>Motivo:</strong> ${motivo}</p>
            </div>
          <div class="col-sm"><strong>Tipo de exmanen que se realizo:</strong>
                 ${
                   completo == 0
                     ? `<p>
                 completo
             </p>`
                     : sobre_cintura == 0
                     ? ` <p>sobre cintura</p>`
                     : lesion_especifica == 0
                     ? ` <p>Lesion especifica</p> `
                     : ""
                 }
            </div>
          </div>
          
          <div class="row">
               <div class="col-md-12"><h4>Impresión Diagnostica</h4></div>
             <div class="col-sm-5 col-sm-offset-2 justify-content-start" > 
                  <div class="col-sm"> <strong>Queretosis Sebarréica:</strong>
                     ${queretosis_seborreica == 1 ? `Si` : "No"}
                </div>
                <div class="col-sm"> <strong>Queretosis Actínica:</strong>
                    ${queretosis_actinica == 1 ? `Si` : "No"}
                 </div>
                 <div class="col-sm"> <strong>Carcinoma Basocelular:</strong>
                    ${carcinoma_basocelular == 1 ? `Si` : "No"}
                 </div>
                <div class="col-sm"> <strong>Carcinomas de células escamosas:</strong>
                  ${celulas_escamosas == 1 ? `Si`: "No" }
                </div>
                <div class="col-sm"> <strong>Lunar Diplástico: </strong>
                  ${lunar_diplastico == 1 ? `Si` : "No"}
                </div>
             </div>
          
          
          
          
            <div class="col-sm">
               <div class="col-sm"> <strong>Lunar Congénito:</strong>
                  ${lunar_congenito == 1 ? ` Si `: "No" }
               </div>
               <div class="col-sm"> <strong>Pterigion:  </strong>
                  ${pterigion == 1 ? `Si`: "No" }
               </div>
               <div class="col-sm"> <strong>Melanoma:  </strong>
                  ${melanoma == 1 ? `Si`: "No" }
                </div>
                <div class="col-sm"> <strong> Otro:  </strong>
                  ${otro}
                </div>
                <div class="col-sm"> <strong> Comentario: </strong>
                  ${comentario}
                </div>
             </div>
             </div>
             <br>
          <div class="row ">
              <div class="col-md-12"><h4>Recomendaciónes</h4></div>
          
                <div class="col-sm"><strong>Biopsia:</strong> ${biopsia}</div>
                <div class="col-sm"><strong>Comentario sobre la biopsia:</strong> ${biopsia_comentario}</div>
                <div class="col-sm"> <strong>Tratamiento:</strong> ${tratamiento}</div>
                <div class="col-sm"><strong>Se refirió a:</strong> ${referir}</div> 
           </div>
          
          
          </div>
          </div> 
          </div>`;
            } else {
              var html =
              html +
              `
              <div class="card">
              <h5 class="card-header">Fecha de atención: ${fecha_informe}</h5>
        <div class="card-body">
                <h5 class="card-title"><strong>Doctor:</strong> ${nombre_medico}</h5>
                <div class="container text-center">
                  <div class="row">
                <div class="col-sm-7">
             
      
          <div class="row">
           <div class="col-sm">
              <p class="card-text"><strong>Motivo:</strong> ${motivo}</p>
            </div>
          <div class="col-sm"><strong>Tipo de exmanen que se realizo:</strong>
                 ${
                   completo == 0
                     ? `<p>
                 completo
             </p>`
                     : sobre_cintura == 0
                     ? ` <p>sobre cintura</p>`
                     : lesion_especifica == 0
                     ? ` <p>Lesion especifica</p> `
                     : ""
                 }
            </div>
      </div>
      
         <div class="row">
               <div class="col-md-12"><h4>Impresión Diagnostica</h4></div>
             <div class="col-sm-5 col-sm-offset-2 justify-content-start" > 
                  <div class="col-sm"> <strong>Queretosis Sebarréica:</strong>
                     ${queretosis_seborreica == 1 ? `Si` : "No"}
                </div>
                <div class="col-sm"> <strong>Queretosis Actínica:</strong>
                    ${queretosis_actinica == 1 ? `Si` : "No"}
                 </div>
                 <div class="col-sm"> <strong>Carcinoma Basocelular:</strong>
                    ${carcinoma_basocelular == 1 ? `Si` : "No"}
                 </div>
                <div class="col-sm"> <strong>Carcinomas de células escamosas:</strong>
                  ${celulas_escamosas == 1 ? `Si`: "No" }
                </div>
                <div class="col-sm"> <strong>Lunar Diplástico: </strong>
                  ${lunar_diplastico == 1 ? `Si` : "No"}
                </div>
             </div>
       
            <div class="col-sm">
               <div class="col-sm"> <strong>Lunar Congénito:</strong>
                  ${lunar_congenito == 1 ? ` Si `: "No" }
               </div>
               <div class="col-sm"> <strong>Pterigion:  </strong>
                  ${pterigion == 1 ? `Si`: "No" }
               </div>
               <div class="col-sm"> <strong>Melanoma:  </strong>
                  ${melanoma == 1 ? `Si`: "No" }
                </div>
                <div class="col-sm"> <strong> Otro:  </strong>
                  ${otro}
                </div>
                <div class="col-sm"> <strong> Comentario: </strong>
                  ${comentario}
                </div>
             </div>
             </div>
             <br>
          <div class="row ">
              <div class="col-md-12"><h4>Recomendaciónes</h4></div>
      
                <div class="col-sm"><strong>Biopsia:</strong> ${biopsia}</div>
                <div class="col-sm"><strong>Comentario sobre la biopsia:</strong> ${biopsia_comentario}</div>
                <div class="col-sm"> <strong>Tratamiento:</strong> ${tratamiento}</div>
                <div class="col-sm"><strong>Se refirió a:</strong> ${referir}</div> 
           </div>
      
        
      </div>
      
      <div class="col-sm-5">
      
          <div class="row">
              <div>
              ${img.outerHTML/*cargar imagen base64*/};  
              </div>
       </div>
      </div>
      </div>
      </div> 
      </div>
      </div>
        
     
        <br>
`;
            }
            
            
            

         
          }

          div.innerHTML = html;

        }
      },
    });
  });
});
