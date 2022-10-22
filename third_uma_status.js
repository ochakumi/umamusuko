var a = document.getElementById("t_a");
var b = document.getElementById("t_b");
var c = document.getElementById("t_c");
var d = document.getElementById("t_d");
var e = document.getElementById("t_e");

// A.defaults.font.family = "Lato";
// A.defaults.font.size = 22;
// A.defaults.color = "black";

var aa = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [3, 4, 2, 0, 5],

        fill: true, 

        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'

        
    }
  ]
};

var bb = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [5, 1, 3, 3, 4],

        fill: true, 

        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'

        
    }
  ]
};

var cc = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [3, 3, 3, 3, 0],

        fill: true, 

        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'

        
    }
  ]
};

var dd = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [2, 4, 4, 1, 4],

        fill: true, 

        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'

        
    }
  ]
};

var ee = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [3, 4, 1, 100, 1],

        fill: true, 

        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'

        
    }
  ]
};
var chartOptions = {
  plugins: {
    title: {
      display: false,
      align: "start",
      text: ""
    },
    legend: {
      align: "start",
      display: false
    }
  },
  scales: {
    r: {
        min: 0,
        max: 5,
        ticks: {
            //option 2, use callback to change labels to empty string
            callback: () => ('')
        },
        pointLabels: {
            font: {
            size: 20
            }
        }
    }
  }
};

var A = new Chart(a, {
  type: "radar",
  data: aa,
  options: chartOptions
});

var B = new Chart(b, {
  type: "radar",
  data: bb,
  options: chartOptions
});

var C = new Chart(c, {
  type: "radar",
  data: cc,
  options: chartOptions
});

var D = new Chart(d, {
  type: "radar",
  data: dd,
  options: chartOptions
});

var E = new Chart(e, {
  type: "radar",
  data: ee,
  options: chartOptions
});






