document.addEventListener('DOMContentLoaded', function () {
  const popularityData = {
      labels: ['Ростелеком', 'МТС', 'Дом.ру', 'К-Телеком', 'Скайнет'],
      datasets: [{
          label: 'Популярность (%)',
          data: [35, 25, 20, 10, 10],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      }]
  };

  const qualityData = {
      labels: ['Ростелеком', 'МТС', 'Дом.ру', 'К-Телеком', 'Скайнет'],
      datasets: [{
          label: 'Качество соединения (из 10)',
          data: [7, 8, 6, 5, 7],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
      }]
  };

  const performanceData = {
      labels: ['Ростелеком', 'МТС', 'Дом.ру', 'К-Телеком', 'Скайнет'],
      datasets: [{
          label: 'Результативность (%)',
          data: [80, 85, 78, 70, 75],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
      }]
  };

  const popularityChartCtx = document.getElementById('popularityChart').getContext('2d');
  const popularityChart = new Chart(popularityChartCtx, {
      type: 'bar',
      data: popularityData,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  const qualityChartCtx = document.getElementById('qualityChart').getContext('2d');
  const qualityChart = new Chart(qualityChartCtx, {
      type: 'radar',
      data: qualityData,
      options: {
          scales: {
              r: {
                  beginAtZero: true
              }
          }
      }
  });

  const performanceChartCtx = document.getElementById('performanceChart').getContext('2d');
  const performanceChart = new Chart(performanceChartCtx, {
      type: 'line',
      data: performanceData,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
