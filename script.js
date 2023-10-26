function createRadarChart(id, data) {
  new Chart(id, {
      type: 'radar',
      data: {
          labels: ["速さ", "耐久力", "体調"],
          datasets: [{
              data: data,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)"
          }]
      },
      options: {
          legend: {
              display: false
          },
          scale: {
              ticks: {
                  min: 0,
                  max: 60,
                  stepSize: 10
              },
              gridLines: {
                  lineWidth: 2,
                  color: "lightgreen",
                  borderDash: context => context.index == 6 ? [] : [6, 4]
              }
          },
          scales: {
            r: {
                pointLabels: {
                    font: {
                        size: 16  // Change this value to your desired font size
                    }
                },
                // ... other options
            }
        }
      }
  });
}

// 学年チャート
createRadarChart("tanaka-chart", [5, 3, 1]);
createRadarChart("hyodo-chart", [5, 3, 1]);
createRadarChart("pumu-chart", [5, 3, 1]);
createRadarChart("takechiyo-chart", [5, 3, 1]);
createRadarChart("miyazaki-chart", [5, 3, 1]);

// 学年チャート
createRadarChart("kiyota-chart", [5, 3, 1]);
createRadarChart("hamatatu-chart", [5, 3, 1]);
createRadarChart("teru-chart", [5, 3, 1]);
createRadarChart("kago-chart", [5, 3, 1]);
createRadarChart("araki-chart", [5, 3, 1]);
createRadarChart("tanigawa-chart", [5, 3, 1]);

// 部門長チャート
createRadarChart("ueda-chart", [5, 3, 1]);
createRadarChart("otuka-chart", [5, 3, 1]);
createRadarChart("omori-chart", [5, 3, 1]);
createRadarChart("irie-chart", [5, 3, 1]);
createRadarChart("kaneko-chart", [5, 3, 1]);

