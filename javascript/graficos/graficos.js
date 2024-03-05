$.ajax({
    url: '../php/graficos/grafico_inicio.php',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        var ctx = document.getElementById('grafica').getContext('2d');
        var labels = [];
        var valores = [];
        for (var i = 0; i < data.length; i++) {
          labels.push(data[i].mes);
          valores.push(data[i].cantidad);
        }
        var chart = new Chart(ctx, {
          type: 'line',
          data: { 
            labels: labels,
            datasets: [{
              label: 'Pacientes ingresados por mes',
              data: valores,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      },
      error: function(xhr, status, error) {
        console.log('Error al obtener los datos');
      }
      
  });