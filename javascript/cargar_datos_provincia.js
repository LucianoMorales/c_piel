fetch('../json/datos.json')

  .then(response => response.json())
  .then(data => {
    const provinciasSelect = document.querySelector('#provincias');

    data.provincias.forEach(provincia => {
      const option = document.createElement('option');
      option.textContent = provincia.nombre;
      provinciasSelect.appendChild(option);
    });
    const distritosSelect = document.querySelector('#distritos');

provinciasSelect.addEventListener('change', () => {
  const provinciaSeleccionada = data.provincias.find(provincia => provincia.nombre === provinciasSelect.value);

  // Borra las opciones anteriores del select de distritos
  distritosSelect.innerHTML = '';

  // Agrega las opciones correspondientes a la provincia seleccionada
  provinciaSeleccionada.distritos.forEach(distrito => {
    const option = document.createElement('option');
    option.textContent = distrito;
    distritosSelect.appendChild(option);
  });
});
  });