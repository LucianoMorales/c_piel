const checkbox = document.getElementById('lesion_especifica');
const boton =  document.getElementById("btn-abrir");
boton.style.display = "none"
checkbox.addEventListener('click', function() {
  if (this.checked) {
    boton.style.display = 'block'; // o boton.classList.remove('hidden');
  } else {
    boton.style.display = 'none'; // o boton.classList.add('hidden');
  }
});




// const checkbox1 = document.getElementById('otro');
// const txt =  document.getElementById("text-otro");
// txt.style.display = "none"
// checkbox1.addEventListener('click', function() {
//   if (this.checked) {
//     txt.style.display = 'block'; // o boton.classList.remove('hidden');
//   } else {
//     txt.style.display = 'none'; // o boton.classList.add('hidden');
//   }
// });