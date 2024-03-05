
    // Obtiene el contenido del div

    
    // const element = document.getElementById("content_expe"); // Selecciona el div a convertir
    // const opt = {
    //   margin: [0.5, 0.5, 0.5, 0.5], // Define los márgenes del PDF
    //   filename: "documento.pdf", // Define el nombre del archivo PDF
    //   image: { type: "jpeg", quality: 0.98 }, // Define la calidad de las imágenes (opcional)
    //   html2canvas: { scale: 2 }, // Define la escala de la captura de pantalla (opcional)
    //   jsPDF: { unit: "in", format: "letter", orientation: "portrait" }, // Define el formato y la orientación del documento PDF (opcional)
    // };
    
    // html2pdf().from(element).set(opt).save(); // Genera y descarga el PDF
document.addEventListener("DOMContentLoaded",()=>{
    const $boton = document.querySelector("#btn-download");
    $boton.addEventListener("click", () => {
        var cedula = document.getElementById("cedula_expediente").value;
        const $elemento = document.querySelector("#content_expe");
        html2pdf()
        .set({
            margin:1,
            filename: 'Historial Clínico de: '+cedula+'.pdf',
            imagen:{
                type:'jpeg',
                quality:0.98
            },
            html2canvas:{
                scale:3,
                letteRendering:true,
            },
            jsPDF:{
                unit:'cm',
                format:"a3",
                orientation:'portrait',
                marginTop: 1,
            }
        })
        .from($elemento)
        .save()
        .catch(err=>console.log(err));
    })


})
    
