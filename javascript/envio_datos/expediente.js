'use strict'


$(document).ready(function() {
    $("#expediente").click(function () {
        var cedula = document.getElementById("cedula_expediente").value;
    
        $.ajax({
          type: "POST",
          url: "../php/expediente.php",
          data: {
            cedula: cedula,
          },
          success: function (datos) {
           
            if (datos == 1) {
              Swal.fire({
                icon: "error",
                title: "Datos no encontrados",
                text: "Asegúrese del que el paciente este registrado o este bien escrita la cédula",
              });
            } else {
                var html;
              var datos = JSON.parse(datos);
              console.log(datos);
              var div = document.getElementById("content_expe");
              var html = "";
              var fecha_ingreso = datos[0].fecha_ingreso;
              var cedula = datos[0].cedula
              var nombre = datos[0].nombre;
              var apellido = datos[0].apellido;
              var sexo = datos [0].sexo;
              var seguro = datos[0].seguro
              var edad = datos[0].edad;
              var telefono = datos[0].telefono;
              var provincia = datos[0].provincia;
              var distrito = datos[0].distrito;
              var ocupacion = datos[0].ocupacion;
              var referente = datos [0].referente;
              var medicamento = datos[0].medicamento;
                var ahf = datos[0].ahf;
                var app = datos[0].app;
                var aqt=datos[0].aqt;
              var fecha_nacimiento = datos[0].fecha_nacimiento;
              var estado_civil = datos[0].estado_civil;

                // formato fecha
                var fecha = new Date(fecha_ingreso);

                // Formatear la fecha en el nuevo formato deseado
                var meses = [
                  "enero",
                  "febrero",
                  "marzo",
                  "abril",
                  "mayo",
                  "junio",
                  "julio",
                  "agosto",
                  "septiembre",
                  "octubre",
                  "noviembre",
                  "diciembre"
                ];
                var mes = meses[fecha.getMonth()];
                var dia = fecha.getDate();
                var anio = fecha.getFullYear();
                var fechaFormateada = dia + " de " + mes + " del " + anio;

// fin formato ffecha

              var fechaHora = new Date().toLocaleString();
              html= html +  ` 
            



              <div class="container text-center">
              <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4 offset-md-4"><img src="../image/fundacancer.png" alt="" width="130">
              <img src="../image/logoancec.png" alt="" width="60"></div>
            </div>
  <div class="row">
    <div class="col-sm-12"><h3>Historia Clinica</h3> </div>
    
  </div>
  <div class="row">
    <div class="col-sm-12"><h6>Fecha: ${fechaHora}</h6> </div>
    
  </div>
 
</div>
<div class="container text-left">
<div class="row">
  <div class="col-sm-12"><h4>Datos personales</h4> </div>
  <hr>
</div>


</div>
<div class="container text-left">
<div class="row">
  <div class="col-sm-12"><p><strong>Fecha de ingreso del paciente: </strong> ${fechaFormateada }</p> </div>
 
</div>


</div>

<div class="container text-left">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col"><strong>Nombre:</strong> ${nombre } ${apellido} </div>
    <div class="col"><strong>Cédula:</strong>${cedula} </div>
    <div class="col"><strong>Seguro:</strong> ${seguro}</div>
    <div class="col"><strong>Edad:</strong> ${edad}</div>
   
  </div>
</div>
<br>
<div class="container text-left">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  
    <div class="col"><strong>Sexo:</strong> ${sexo}</div>
    <div class="col"><strong>Teléfono:</strong> ${telefono}</div>
    <div class="col"><strong>Ocupación:</strong> ${ocupacion} </div>
  
    <div class="col"><strong>Estado Civil:</strong> ${estado_civil}</div>
    
  </div>
</div>
<br>
<div class="container text-left">
  <div class="row row-cols-4">
  

    <div class="col-6"><strong>Lugar de residencia:</strong> ${provincia} , ${distrito}</div>
    <div class="col-6"><strong>Fecha de Nacimiento: </strong>${fecha_nacimiento}</div>
  </div>
</div>
<br>
<div class="container text-left">
  <div class="row row-cols-4">
  

    <div class="col-6"><strong>Fue referido por</strong> : ${referente} </div>
    </div>
 
</div>
<br>
<div class="container text-left">
  <div class="row row-cols-4">
  

    <div class="col-12"><strong>Medicamentos a los que es alergico</strong> : ${medicamento} </div>
   
  </div>
</div>
<br>
<div class="container text-left">
  <div class="row row-cols-4">
  

    <div class="col-4"><strong>AHF</strong> : ${ahf} </div>
    <div class="col-4"><strong>APP:</strong> : ${app} </div>
    <div class="col-4"><strong>AQT</strong> : ${aqt} </div>
  </div>
</div>

<br>
<div class="container text-left">
<div class="row">
  <div class="col-sm-12"><h4>Consultas</h4> </div>
  <hr>
</div>


</div>
              `;
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
                console.log(carcinoma_basocelular);
                var celulas_escamosas = registro.celulas_escamosas;
                var lunar_diplastico = registro.lunar_diplastico;
                var lunar_congenito = registro.lunar_congenito;
                var pterigion = registro.pterigion;
                var melanoma = registro.melanoma;
                
                var otro = registro.otro;
                var comentario = registro.comentario;
                var fecha_ = new Date(fecha_informe);
               
                const img = new Image();
                img.style.width="440px";
                img.classList.add("img-fluid");
                img.src = registro.img_dataurl; //imagen base64
             var img_img = registro.img_dataurl;
                // Formatear la fecha en el nuevo formato deseado
                var meses = [
                  "enero",
                  "febrero",
                  "marzo",
                  "abril",
                  "mayo",
                  "junio",
                  "julio",
                  "agosto",
                  "septiembre",
                  "octubre",
                  "noviembre",
                  "diciembre"
                ];
                var mes = meses[fecha_.getMonth()];
                var dia = fecha_.getDate()+1;
                var anio = fecha_.getFullYear();
                var fechaFormateada_ = dia + " de " + mes + " del " + anio;

                if (img_img === null) {
                  var html =
                  html +
                  `<br> 
                  <div class="card" id="card-title">
                  <h5 class="card-header">Fecha de atención: ${fechaFormateada_}</h5>
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
                  <div class="card" id="card-title">
                  <h5 class="card-header">Fecha de atención: ${fechaFormateada_}</h5>
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


