// Configuração inicial dos gráficos
const ctxLine = document.getElementById('lineChart').getContext('2d');
const ctxBar = document.getElementById('barChart').getContext('2d');

const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Vendas 2024',
            data: [30, 50, 40, 60, 70, 90],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            label: 'Vendas por Produto',
            data: [65, 59, 80, 81],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Função para atualizar os dados aleatoriamente
function updateChartData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data = dataset.data.map(() => Math.floor(Math.random() * 100));
    });
    chart.update();
}

// Atualizar os gráficos ao clicar no botão
document.getElementById('updateData').addEventListener('click', () => {
    updateChartData(lineChart);
    updateChartData(barChart);
});
