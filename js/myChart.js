var data = {
  labels: ["Ruby", "Javascript", "HTML", "CSS", "Python"],
  datasets: [
    {
      label: "My Code Skillset",
      fillColor: "rgba(254,209,54,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [70, 50, 50, 50, 30]
    }
  ]
};

var ctx = $("#myChart").get(0).getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data, {
  responsive: true,
  pointLabelFontSize: 14,
  pointLabelFontColor: "#666",
});
