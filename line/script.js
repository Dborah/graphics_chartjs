var ctx = document.getElementsByClassName("line-chart");

//Type, Data e options
var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "TAXA DE CLIQUES - 2020",
                data : [5, 10, 5, 14, 20, 15, 6, 14, 8, 12, 15, 5],
                borderWidth: 6, 
                borderColor: 'rgba(77, 166, 253, 0.85)',
                backgroundColor: 'transparent'
            },
            {
                label: "TAXA DE CLIQUES - 2020",
                data : [9, 14, 11, 6, 5, 4, 3, 8, 11, 10, 18, 6],
                borderWidth: 6, 
                borderColor: 'rgba(6, 204, 6, 0.85)',
                backgroundColor: 'transparent'
            }
        ]
    },
    options: {
        title: {
            display: true, 
            fontSize: 20, 
            text: "RELATÓRIO DE CTR ANUAL"
        },
        labels:{
            text:{
                fontStyle: "bold"
            }
        }
    }
});