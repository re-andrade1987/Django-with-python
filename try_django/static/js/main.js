var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [{
            label: "Número de veiculos apreendidos",
            backgroundColor: 'rgb(0,0,0)',
            borderColor: 'rgb(105,105,105)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             suggestedMin: 10,
        //             suggestedMax: 50
        //         }
        //     }]
        // }
    }
});

$('button').on('click', function(){
    html2canvas($('#myChart'), {
      onrendered: function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF('p', 'mm');
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save('test.pdf');
      }
    });
  });
  