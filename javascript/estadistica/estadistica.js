
$(document).ready(function() {

    $("#btn_descargar").click(function (e) {
        var div = document.createElement('div');
      // Crear un div con el contenido a descargar
      var fecha_i = document.getElementById("fecha_de").value;	
      var fecha_h = document.getElementById("fecha_hasta").value;
      if (fecha_i.length > 0 && fecha_h.length > 0) {

        
      $.ajax({
        
        url: '../php/estadistica.php',
        type: 'POST',
        data: {fecha_i:fecha_i, fecha_h:fecha_h},
        success: function(data) {
console.log(data);
          /////////////////////////////////////////////////////////////////
        // TABLA 1-ASEGURADOS
        ///////////////////////////////////////////////////////////////
          var tablaConsulta1 = document.createElement('table');
          var caption1 = tablaConsulta1.createCaption();
caption1.innerHTML = "Cantidad de Asegurados y no Asegurados";
var thead1 = tablaConsulta1.createTHead();
var row1 = thead1.insertRow();
var cell1 = row1.insertCell();
var cell2 = row1.insertCell();
cell1.innerHTML = "Asegurados";
cell2.innerHTML = "Cantidad";

  /////////////////////////////////////////////////////////////////
        // TABLA 2-SEXO
        ///////////////////////////////////////////////////////////////

var tablaConsulta2 = document.createElement('table');
var caption2 = tablaConsulta2.createCaption();
caption2.innerHTML = "Cantidad de pacientes por sexo";
var thead1 = tablaConsulta2.createTHead();
var row1 = thead1.insertRow();
var cell1 = row1.insertCell();
var cell2 = row1.insertCell();
cell1.innerHTML = "Sexo";
cell2.innerHTML = "Cantidad";

  /////////////////////////////////////////////////////////////////
        // TABLA 3-RANGO EDADES
        ///////////////////////////////////////////////////////////////
        var tablaConsulta3 = document.createElement('table');
        // var caption3 = tablaConsulta3.createCaption();
        // caption3.innerHTML = "Cantidad de pacientes por Rango de edades";
        var thead1 = tablaConsulta3.createTHead();
        var row1 = thead1.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        cell1.innerHTML = "Edades";
        cell2.innerHTML = "Cantidad";
          /////////////////////////////////////////////////////////////////
        // TABLA 4-BIOPSIAS
        ///////////////////////////////////////////////////////////////
        var tablaConsulta4 = document.createElement('table');
        // var caption4 = tablaConsulta4.createCaption();
        // caption4.innerHTML = "Cantidad de pacientes por Biopsias";
        var thead1 = tablaConsulta4.createTHead();
        var row1 = thead1.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        cell1.innerHTML = "Biopsias";
        cell2.innerHTML = "Cantidad";
          /////////////////////////////////////////////////////////////////
        // TABLA 5-Diagnosticos
        ///////////////////////////////////////////////////////////////
        var tablaConsulta5= document.createElement('table');
        // var caption5 = tablaConsulta5.createCaption();
        // caption5.innerHTML = "Cantidad de pacientes por Diagnostico";
        var thead1 = tablaConsulta5.createTHead();
        var row1 = thead1.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        var cell3 = row1.insertCell();
        var cell4 = row1.insertCell();
        var cell5 = row1.insertCell();
        var cell6 = row1.insertCell();
        var cell7 = row1.insertCell();
        var cell8 = row1.insertCell();
        var cell9 = row1.insertCell();
     
        cell1.innerHTML = "queretosis seborreica";
        cell2.innerHTML = "queratosis actinica";
        cell3.innerHTML = "carcinoma basocelular";
        cell4.innerHTML = "celulas escamosas";
        cell5.innerHTML = "lunar diplastico";
        cell6.innerHTML = "lunar congenito";
        cell7.innerHTML = "pterigion";
        cell8.innerHTML = "melanoma";
        cell9.innerHTML = "otro";

           /////////////////////////////////////////////////////////////////
        // TABLA 4-PROVINCIAS
        ///////////////////////////////////////////////////////////////
        var tablaConsulta6 = document.createElement('table');
        // var caption6 = tablaConsulta6.createCaption();
        // caption6.innerHTML = "Cantidad de pacientes por provincias";
        var thead1 = tablaConsulta6.createTHead();
        var row1 = thead1.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        cell1.innerHTML = "Provincias";
        cell2.innerHTML = "Cantidad";

             /////////////////////////////////////////////////////////////////
        // TABLA 4-referencias
        ///////////////////////////////////////////////////////////////
        var tablaConsulta7 = document.createElement('table');
        // var caption7 = tablaConsulta7.createCaption();
        // caption7.innerHTML = "Cantidad de pacientes por Referencia";
        var thead1 = tablaConsulta7.createTHead();
        var row1 = thead1.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        cell1.innerHTML = "Referencias";
        cell2.innerHTML = "Cantidad";

// Agrega las tablas al DOM donde quieras mostrarlas
// document.body.appendChild(tablaConsulta1);
// document.body.appendChild(tablaConsulta2);
// document.body.appendChild(tablaConsulta3);
// document.body.appendChild(tablaConsulta4);
// document.body.appendChild(tablaConsulta5);
// document.body.appendChild(tablaConsulta6);
// document.body.appendChild(tablaConsulta7);
// Crea las filas y celdas de cada tabla utilizando los datos recibidos
// Recorre los datos de la primera consulta
for (var i = 0; i < data.consulta1.length; i++) {

  var fila = tablaConsulta1.insertRow();
  var datosFila = data.consulta1[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.seguro;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.cantidad;

  // ... Agrega las celdas adicionales si es necesario
}

// Recorre los datos de la segunda consulta
for (var i = 0; i < data.consulta2.length; i++) {
  var fila = tablaConsulta2.insertRow();
  var datosFila = data.consulta2[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.sexo;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.cantidad;

  // ... Agrega las celdas adicionales si es necesario
}

for (var i = 0; i < data.consulta3.length; i++) {
  var fila = tablaConsulta3.insertRow();
  var datosFila = data.consulta3[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.rango_edad;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.cantidad;

}

for (var i = 0; i < data.consulta4.length; i++) {
  var fila = tablaConsulta4.insertRow();
  var datosFila = data.consulta4[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.biopsia;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.cantidad;

}
for (var i = 0; i < data.consulta5.length; i++) {
  var fila = tablaConsulta5.insertRow();
  var datosFila = data.consulta5[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.count_queretosis_seborreica;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.count_queratosis_actinica;
  var celda3 = fila.insertCell(2);
  celda3.innerHTML = datosFila.count_carcinoma_basocelular;
  var celda4 = fila.insertCell(3);
  celda4.innerHTML = datosFila.count_celulas_escamosas;

  var celda5 = fila.insertCell(4);
  celda5.innerHTML = datosFila.count_lunar_diplastico;
  var celda6 = fila.insertCell(5);
  celda6.innerHTML = datosFila.count_lunar_congenito;
  var celda7 = fila.insertCell(6);
  celda7.innerHTML = datosFila.count_pterigion;
  var celda8 = fila.insertCell(7);
  celda8.innerHTML = datosFila.count_melanoma;
  var celda9 = fila.insertCell(8);
  celda9.innerHTML = datosFila.count_otro;
  
}
for (var i = 0; i < data.consulta6.length; i++) {
  var fila = tablaConsulta6.insertRow();
  var datosFila = data.consulta6[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.provincia;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.cantidad;

}
for (var i = 0; i < data.consulta7.length; i++) {
  var fila = tablaConsulta7.insertRow();
  var datosFila = data.consulta7[i];

  var celda1 = fila.insertCell(0);
  celda1.innerHTML = datosFila.referente;

  var celda2 = fila.insertCell(1);
  celda2.innerHTML = datosFila.cantidad;

}

var workbook = XLSX.utils.book_new();

// Crea una hoja para la primera consulta
var hojaConsulta1 = XLSX.utils.table_to_sheet(tablaConsulta1);


// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta1, 'Cant. de pacientes asegurados');

// Crea una hoja para la segunda consulta
var hojaConsulta2 = XLSX.utils.table_to_sheet(tablaConsulta2);

// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta2, 'cant. pacientes por sexo');  

var hojaConsulta3 = XLSX.utils.table_to_sheet(tablaConsulta3);

// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta3, 'cant. pacientes rango edades');  


var hojaConsulta4 = XLSX.utils.table_to_sheet(tablaConsulta4);

// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta4, 'cantidad Biopsias');  


var hojaConsulta5 = XLSX.utils.table_to_sheet(tablaConsulta5);

// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta5, 'Diagnosticos');  

var hojaConsulta6 = XLSX.utils.table_to_sheet(tablaConsulta6);

// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta6, 'Cant. pacientes por provincia');  

var hojaConsulta7 = XLSX.utils.table_to_sheet(tablaConsulta7);

// Agrega la hoja al Workbook con un nombre específico
XLSX.utils.book_append_sheet(workbook, hojaConsulta7, 'Referencias');  

var nombreArchivo = "Reportes de: "+fecha_i+"hasta: "+fecha_h+".xlsx";
XLSX.writeFile(workbook, nombreArchivo);

        }
      });
    
    }
    else{
      Swal.fire({
        title: 'Información',
        text: "Faltan datos, ¿desea descargar información completa? si no es asi, porfavor agregar fechas en sus campos",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, descargalo',
        cancelButtonText: 'no, regresa'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            url: '../php/estadistica_sin.php',
            type: 'POST',
            data: {fecha_i:fecha_i, fecha_h:fecha_h},
            success: function(data) {
   
              /////////////////////////////////////////////////////////////////
            // TABLA 1-ASEGURADOS
            ///////////////////////////////////////////////////////////////
              var tablaConsulta1 = document.createElement('table');
    //           var caption1 = tablaConsulta1.createCaption();
    // caption1.innerHTML = "Cantidad de Asegurados y no Asegurados";
    var thead1 = tablaConsulta1.createTHead();
    var row1 = thead1.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    cell1.innerHTML = "Asegurados";
    cell2.innerHTML = "Cantidad";
    
      /////////////////////////////////////////////////////////////////
            // TABLA 2-SEXO
            ///////////////////////////////////////////////////////////////
    
    var tablaConsulta2 = document.createElement('table');
    // var caption2 = tablaConsulta2.createCaption();
    // caption2.innerHTML = "Cantidad de pacientes por sexo";
    var thead1 = tablaConsulta2.createTHead();
    var row1 = thead1.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    cell1.innerHTML = "Sexo";
    cell2.innerHTML = "Cantidad";
    
      /////////////////////////////////////////////////////////////////
            // TABLA 3-RANGO EDADES
            ///////////////////////////////////////////////////////////////
            var tablaConsulta3 = document.createElement('table');
            // var caption3 = tablaConsulta3.createCaption();
            // caption3.innerHTML = "Cantidad de pacientes por Rango de edades";
            var thead1 = tablaConsulta3.createTHead();
            var row1 = thead1.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            cell1.innerHTML = "Edades";
            cell2.innerHTML = "Cantidad";
              /////////////////////////////////////////////////////////////////
            // TABLA 4-BIOPSIAS
            ///////////////////////////////////////////////////////////////
            var tablaConsulta4 = document.createElement('table');
            // var caption3 = tablaConsulta4.createCaption();
            // caption3.innerHTML = "Cantidad de pacientes por Biopsias";
            var thead1 = tablaConsulta4.createTHead();
            var row1 = thead1.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            cell1.innerHTML = "Biopsias";
            cell2.innerHTML = "Cantidad";
              /////////////////////////////////////////////////////////////////
            // TABLA 5-Diagnosticos
            ///////////////////////////////////////////////////////////////
            var tablaConsulta5= document.createElement('table');
            // var caption3 = tablaConsulta5.createCaption();
            // caption3.innerHTML = "Cantidad de pacientes por diagnosticos";
            var thead1 = tablaConsulta5.createTHead();
            var row1 = thead1.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            var cell3 = row1.insertCell();
            var cell4 = row1.insertCell();
            var cell5 = row1.insertCell();
            var cell6 = row1.insertCell();
            var cell7 = row1.insertCell();
            var cell8 = row1.insertCell();
            var cell9 = row1.insertCell();
         
            cell1.innerHTML = "queretosis seborreica";
            cell2.innerHTML = "queratosis actinica";
            cell3.innerHTML = "carcinoma basocelular";
            cell4.innerHTML = "celulas escamosas";
            cell5.innerHTML = "lunar diplastico";
            cell6.innerHTML = "lunar congenito";
            cell7.innerHTML = "pterigion";
            cell8.innerHTML = "melanoma";
            cell9.innerHTML = "otro";
    
               /////////////////////////////////////////////////////////////////
            // TABLA 4-PROVINCIAS
            ///////////////////////////////////////////////////////////////
            var tablaConsulta6 = document.createElement('table');
            // var caption4 = tablaConsulta6.createCaption();
            // caption4.innerHTML = "Cantidad de pacientes por provincia";
            var thead1 = tablaConsulta6.createTHead();
            var row1 = thead1.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            cell1.innerHTML = "Provincias";
            cell2.innerHTML = "Cantidad";
    
                 /////////////////////////////////////////////////////////////////
            // TABLA 4-referencias
            ///////////////////////////////////////////////////////////////
            var tablaConsulta7 = document.createElement('table');
            // var caption5 = tablaConsulta7.createCaption();
            // caption5.innerHTML = "Cantidad de pacientes por referencia";
            var thead1 = tablaConsulta7.createTHead();
            var row1 = thead1.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            cell1.innerHTML = "Referencias";
            cell2.innerHTML = "Cantidad";
    
    // Agrega las tablas al DOM donde quieras mostrarlas
    // document.body.appendChild(tablaConsulta1);
    // document.body.appendChild(tablaConsulta2);
    // document.body.appendChild(tablaConsulta3);
    // document.body.appendChild(tablaConsulta4);
    // document.body.appendChild(tablaConsulta5);
    // document.body.appendChild(tablaConsulta6);
    // document.body.appendChild(tablaConsulta7);
    // Crea las filas y celdas de cada tabla utilizando los datos recibidos
    // Recorre los datos de la primera consulta
    for (var i = 0; i < data.consulta1.length; i++) {
    
      var fila = tablaConsulta1.insertRow();
      var datosFila = data.consulta1[i];
    
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.seguro;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.cantidad;
    
      // ... Agrega las celdas adicionales si es necesario
    }
    
    // Recorre los datos de la segunda consulta
    for (var i = 0; i < data.consulta2.length; i++) {
      var fila = tablaConsulta2.insertRow();
      var datosFila = data.consulta2[i];
    
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.sexo;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.cantidad;
    
      // ... Agrega las celdas adicionales si es necesario
    }
    
    for (var i = 0; i < data.consulta3.length; i++) {
      var fila = tablaConsulta3.insertRow();
      var datosFila = data.consulta3[i];
    
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.rango_edad;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.cantidad;
    
    }
    
    for (var i = 0; i < data.consulta4.length; i++) {
      var fila = tablaConsulta4.insertRow();
      var datosFila = data.consulta4[i];
    
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.biopsia;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.cantidad;
    
    }
    for (var i = 0; i < data.consulta5.length; i++) {
      var fila = tablaConsulta5.insertRow();
      var datosFila = data.consulta5[i];
      
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.count_queretosis_seborreica;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.count_queratosis_actinica;
      var celda3 = fila.insertCell(2);
      celda3.innerHTML = datosFila.count_carcinoma_basocelular;
      var celda4 = fila.insertCell(3);
      celda4.innerHTML = datosFila.count_celulas_escamosas;
      
      var celda5 = fila.insertCell(4);
      celda5.innerHTML = datosFila.count_lunar_diplastico;
     
      var celda6 = fila.insertCell(5);
      celda6.innerHTML = datosFila.count_lunar_congenito;
      var celda7 = fila.insertCell(6);
      celda7.innerHTML = datosFila.count_pterigion;
      var celda8 = fila.insertCell(7);
      celda8.innerHTML = datosFila.count_melanoma;
      var celda9 = fila.insertCell(8);
      celda9.innerHTML = datosFila.count_otro;
      
    }
    for (var i = 0; i < data.consulta6.length; i++) {
      var fila = tablaConsulta6.insertRow();
      var datosFila = data.consulta6[i];
    
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.provincia;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.cantidad;
    
    }
    for (var i = 0; i < data.consulta7.length; i++) {
      var fila = tablaConsulta7.insertRow();
      var datosFila = data.consulta7[i];
    
      var celda1 = fila.insertCell(0);
      celda1.innerHTML = datosFila.referente;
    
      var celda2 = fila.insertCell(1);
      celda2.innerHTML = datosFila.cantidad;
    
    }
    
    var workbook = XLSX.utils.book_new();
    
    // Crea una hoja para la primera consulta
    var hojaConsulta1 = XLSX.utils.table_to_sheet(tablaConsulta1);
    
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta1, 'Cant. de pacientes asegurados');
    
    // Crea una hoja para la segunda consulta
    var hojaConsulta2 = XLSX.utils.table_to_sheet(tablaConsulta2);
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta2, 'cant. pacientes por sexo');  
    
    var hojaConsulta3 = XLSX.utils.table_to_sheet(tablaConsulta3);
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta3, 'cant. pacientes rango edades');  
    
    
    var hojaConsulta4 = XLSX.utils.table_to_sheet(tablaConsulta4);
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta4, 'cantidad Biopsias');  
    
    
    var hojaConsulta5 = XLSX.utils.table_to_sheet(tablaConsulta5);
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta5, 'Diagnosticos');  
    
    var hojaConsulta6 = XLSX.utils.table_to_sheet(tablaConsulta6);
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta6, 'Cant. pacientes por provincia');  
    
    var hojaConsulta7 = XLSX.utils.table_to_sheet(tablaConsulta7);
    
    // Agrega la hoja al Workbook con un nombre específico
    XLSX.utils.book_append_sheet(workbook, hojaConsulta7, 'Referencias');  
    
    var nombreArchivo = "Reporte completo.xlsx";
    XLSX.writeFile(workbook, nombreArchivo);
    
            }
          });
        }
      })

    }






    })
})




