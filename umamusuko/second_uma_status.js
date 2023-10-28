var a = document.getElementById("s_a");
var b = document.getElementById("s_b");
var c = document.getElementById("s_c");
var d = document.getElementById("s_d");
var e = document.getElementById("s_e");
var f = document.getElementById("s_f");

// A.defaults.font.family = "Lato";
// A.defaults.font.size = 22;
// A.defaults.color = "black";

var aa = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [5, 5, 5, 5, 5],

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
        data: [3, 4, 3, 10, 1],

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
        data: [3, 4, 3, -100, 3],

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
        data: [3, 3, 0, 10, 3],

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
        data: [5, 4, 5, 2, 5],

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

var ff = {
  labels: ["スピード", "持久力", "調子", "運勢", "計画性"],
  datasets: [
    {
        data: [5, 4, 5, 2, 5],

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

var F = new Chart(f, {
  type: "radar",
  data: ff,
  options: chartOptions
});






